export async function GET(request) {
    const base = `https://prg-banner-creator.vercel.app/image-library`; // base required to construct URL
  const url = new URL(request.url, base);
  const params = url.searchParams;

  // Read a single param
  const plane = params.get('plane'); // returns string or null
  const airline = params.get('airline')

  if (airline == "No Airport Filter Applied" && plane != "No Plane Filter Applied"){
    const resp = await fetch(`https://tico09.com/photos/api/search?q=${plane}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  } else if (plane == "No Plane Filter Applied" && airline != "No Airline Filter Applied"){
    const resp = await fetch(`https://tico09.com/photos/api/search?q=${airline}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  } else {
    const resp = await fetch(`https://tico09.com/photos/api/${plane}/${airline}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    const data = await resp.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  }
}


