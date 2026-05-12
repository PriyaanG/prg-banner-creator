export async function GET(request) {
    const resp = await fetch('https://tico09.com/photos/api/A320/DLH', {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok){ console.log(res.status(resp.status).json({ error: await resp.text() })); }
    else {
    const data = await resp.json();
    return res.status(200).json(data);
    }
  }
