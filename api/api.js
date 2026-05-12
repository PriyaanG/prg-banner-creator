export async function GET(request) {
try {
    const resp = await fetch('https://tico09.com/photos/api/A320/DLH', {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok) return res.status(resp.status).json({ error: await resp.text() });
    const data = await resp.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}