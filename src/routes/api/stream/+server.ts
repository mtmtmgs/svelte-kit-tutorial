export const GET = async (): Promise<Response> => {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 1; i <= 100; i++) {
        const data = { id: i, value: `Item ${i}` };
        controller.enqueue(encoder.encode(JSON.stringify(data) + '\n'));
        await new Promise((r) => setTimeout(r, 100));
      }
      controller.close();
    }
  });

  return new Response(stream);
};
