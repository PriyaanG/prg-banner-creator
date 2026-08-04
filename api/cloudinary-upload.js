import { v2 as cloudinary } from 'cloudinary';

export async function GET(request) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const airlineVar = params.get('airline');
  const planeVar = params.get('plane');
  const imagePath = params.get('imagepath');
  const airportVar = params.get('airport')

  if (imagePath == ""){
     return new Response(JSON.stringify("Failed. Reason: Image Path Is Null"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } else if (planeVar == ""){
    return new Response(JSON.stringify("Failed. Reason: Plane Variable Is Null"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } else if (airlineVar == "") {
    return new Response(JSON.stringify("Failed. Reason: Airline Variable Is Null"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      resource_type: "image",
      metadata: `airline=${airlineVar}|plane=${planeVar}|airport=${airportVar}`,
      public_id: `${planeVar}${airlineVar}_${airportVar}`
    });

    return new Response(JSON.stringify("Success"), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify("Error: " + JSON.stringify(error)), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}