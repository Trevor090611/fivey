let engine;

self.onmessage = async ({ data: messages }) => {
  try {
    if (!engine) {
      const adapter = await navigator.gpu?.requestAdapter();
      if (!adapter) {
        self.postMessage({ type: 'unsupported' });
        return;
      }
      const { CreateMLCEngine } = await import('https://esm.run/@mlc-ai/web-llm@0.2.88');
      const precision = adapter.features.has('shader-f16') ? 'q4f16_1' : 'q4f32_1';
      const primary = 'Llama-3.2-1B-Instruct-' + precision + '-MLC';
      const compact = 'SmolLM2-360M-Instruct-' + precision + '-MLC';
      const initialize = (model, fallback) => CreateMLCEngine(model, {
        initProgressCallback: ({ progress }) => {
          self.postMessage({ type: 'loading', percent: Math.floor(progress * 100), fallback });
        }
      });
      try {
        engine = await initialize(primary, false);
      } catch (error) {
        self.postMessage({ type: 'fallback' });
        console.warn('Fivey primary model failed:', error);
        engine = await initialize(compact, true);
      }
    }
    self.postMessage({ type: 'generating' });
    const reply = await engine.chat.completions.create({
      messages,
      max_tokens: 550,
      temperature: 0.35
    });
    const answer = reply.choices[0]?.message?.content?.trim();
    if (!answer) throw new Error('Empty response');
    self.postMessage({ type: 'answer', answer });
  } catch (error) {
    console.error('Fivey model error:', error);
    self.postMessage({ type: 'error', reason: String(error) });
  }
};
