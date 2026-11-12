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
      const model = adapter.features.has('shader-f16')
        ? 'Llama-3.2-3B-Instruct-q4f16_1-MLC'
        : 'Llama-3.2-1B-Instruct-q4f32_1-MLC';
      engine = await CreateMLCEngine(model, {
        initProgressCallback: ({ progress }) => {
          self.postMessage({ type: 'loading', percent: Math.floor(progress * 100) });
        }
      });
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
    self.postMessage({ type: 'error' });
  }
};
