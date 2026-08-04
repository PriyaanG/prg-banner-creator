import { v2 as cloudinary } from 'cloudinary';

export async function GET(request) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const airlineVar = params.get('airline');
  const planeVar = params.get('plane');
  const imagePath = params.get('imagepath');
  const airportVar = params.get('airportvar')

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      resource_type: "image",
      metadata: `airline=${airlineVar}|plane=${planeVar}|airport=${airportVar}`,
      public_id: `${planeVar}${airlineVar}_{airportVar}`
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