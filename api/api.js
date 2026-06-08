export async function GET(request) {
    const base = `https://prg-banner-creator.vercel.app/image-library`; // base required to construct URL
  const url = new URL(request.url, base);
  const params = url.searchParams;

  // Read a single param
  const plane = params.get('plane'); // returns string or null
  const airline = params.get('airline')
  let responseList = []

  let response;

  if (airline == ""){
    const resp = await fetch(`https://tico09.com/photos/api/search?q=${plane}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    const data = await resp.json();
  response = data;
  } else if (plane == ""){
    const resp = await fetch(`https://tico09.com/photos/api/search?q=${airline}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    const data = await resp.json();
  response = data;
  } else {
    const resp = await fetch(`https://tico09.com/photos/api/${plane}/${airline}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    console.log(`https://tico09.com/photos/api/${plane}/${airline}`)
    const data = await resp.json();
 response = data;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  }
  response.results.forEach(element => {
  responseList.push({URL: element.url, Author: element.author})
  });
  console.log(responseList)
    return new Response(JSON.stringify(responseList), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


