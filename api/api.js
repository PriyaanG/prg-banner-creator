export async function GET(request) {
  const resp = await fetch('https://tico09.com/photos/api/A320/DLH', {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  });
  if (!resp.ok) {
    return new Response(JSON.stringify({ error: await resp.text() }), {
      status: resp.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
