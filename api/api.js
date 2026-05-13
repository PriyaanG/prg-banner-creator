export async function GET(request) {
    const base = `https://prg-banner-creator.vercel.app/image-library`; // base required to construct URL
  const url = new URL(req.url, base);
  const params = url.searchParams;

  // Read a single param
  const plane = params.get('plane'); // returns string or null
  const airline = params.goet('airline')
    const resp = await fetch(`https://tico09.com/photos/api/${plane}/${airline}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok){ console.log(res.status(resp.status).json({ error: await resp.text() })); }
    else {
    const data = await resp.json();
    return res.status(200).json(data);
    }
  }
