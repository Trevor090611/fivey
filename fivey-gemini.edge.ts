// Deploy as the fivey-gemini Supabase Edge Function.
// Configure GEMINI_API_KEY in Edge Function Secrets.
const allowedOrigins = new Set(['https://fivey.monster', 'https://trevor090611.github.io']);
const tutorInstruction = [
  'You are Grogy, the AP exam tutor on Fivey. Give accurate, concise AP-level explanations in plain text.',
  'Show reasoning and units where relevant. Ask for clarification when needed and say when unsure.',
  'Only cite Fivey sources supplied with the question. If the student asks for a source and no relevant excerpt is supplied, say so.',
  'Create original AP-style practice questions. Never claim a question is an official exam item.',
  'For multiple choice, give four plausible options and wait for a response before explaining the correct answer unless asked for it.',
  'For Progress Checking reviews with a checked answer key, use that key as the only source of facts and arithmetic. Never invent intermediate values or change the correct answer.'
].join(' ');
const courses = new Map([
  ['biology', 'AP Biology'], ['chemistry', 'AP Chemistry'],
  ['environmental-science', 'AP Environmental Science'], ['physics-1', 'AP Physics 1'],
  ['psychology', 'AP Psychology'], ['calculus-ab', 'AP Calculus AB'],
  ['macroeconomics', 'AP Macroeconomics']
]);

async function readBody(req: Request) {
  const reader = req.body?.getReader();
  if (!reader) throw new Error('Missing payload');
  const decoder = new TextDecoder();
  let output = '';
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) return JSON.parse(output + decoder.decode());
    bytes += value.byteLength;
    if (bytes > 32768) {
      await reader.cancel();
      throw new Error('Payload too large');
    }
    output += decoder.decode(value, { stream: true });
  }
}

Deno.serve(async req => {
  const origin = req.headers.get('origin');
  if (origin && !allowedOrigins.has(origin)) return new Response(null, { status: 403 });
  const headers = {
    ...(origin ? { 'Access-Control-Allow-Origin': origin } : {}),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
    'Cache-Control': 'no-store',
    Vary: 'Origin'
  };
  const json = (body: Record<string, unknown>, status = 200) =>
    Response.json(body, { status, headers });

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return json({ code: 'METHOD_NOT_ALLOWED' }, 405);

  const authorization = req.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) return json({ code: 'UNAUTHORIZED' }, 401);
  try {
    const project = Deno.env.get('SUPABASE_URL');
    const key = JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS') ?? '{}').default ??
      Deno.env.get('SUPABASE_ANON_KEY');
    const auth = await fetch(project + '/auth/v1/user', {
      headers: { apikey: key, authorization },
      signal: AbortSignal.timeout(6000)
    });
    if (auth.status === 401 || auth.status === 403) return json({ code: 'UNAUTHORIZED' }, 401);
    if (!auth.ok) return json({ code: 'AUTH_UNAVAILABLE' }, 502);
    const user = await auth.json();
    if (!(user.app_metadata?.providers?.includes('google') ||
      (user.email_confirmed_at && user.user_metadata?.fivey_password_ready === true))) {
      return json({ code: 'UNAUTHORIZED' }, 403);
    }
  } catch {
    return json({ code: 'AUTH_UNAVAILABLE' }, 502);
  }

  const apiKey = Deno.env.get('GEMINI_API_KEY');
  if (!apiKey) return json({ code: 'GEMINI_NOT_CONFIGURED' }, 503);

  let payload;
  try {
    payload = await readBody(req);
  } catch {
    return json({ code: 'INVALID_MESSAGES' }, 400);
  }
  const messages = payload?.messages;
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 5 || messages.length % 2 !== 1 ||
    messages.some((message, index) => message?.role !== (index % 2 === 0 ? 'user' : 'assistant') ||
      typeof message.content !== 'string' || !message.content.trim() || message.content.length > 6000)) {
    return json({ code: 'INVALID_MESSAGES' }, 400);
  }

  const course = courses.get(payload.course);
  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: tutorInstruction +
            (course ? ' The current course is ' + course + '. Help with another AP course if the student requests it.' : '') }] },
          contents: messages.map(message => ({
            role: message.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: message.content }]
          })),
          generationConfig: { maxOutputTokens: 1000, thinkingConfig: { thinkingLevel: 'minimal' } }
        }),
        signal: AbortSignal.timeout(25000)
      }
    );
    if (response.status === 429) return json({ code: 'RATE_LIMIT' }, 429);
    if (!response.ok) return json({ code: 'GEMINI_UNAVAILABLE' }, 502);
    const result = await response.json();
    const answer = result.candidates?.[0]?.content?.parts
      ?.filter((part: { thought?: boolean; text?: string }) => !part.thought && typeof part.text === 'string')
      .map((part: { text: string }) => part.text)
      .join('').trim();
    return answer ? json({ answer }) : json({ code: 'NO_ANSWER' }, 422);
  } catch {
    return json({ code: 'GEMINI_UNAVAILABLE' }, 502);
  }
});
