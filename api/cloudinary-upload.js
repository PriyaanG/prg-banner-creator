import { v2 as cloudinary } from 'cloudinary';

export async function GET(request) {
// Require the cloudinary library
const params = url.searchParams;
const airlineVar = params.get('airline')
const planeVar = params.get('plane')
const imagePath = params.get('imagepath')

cloudinary.uploader
.upload("KLM.png", {
  resource_type:"image",
})
.then((result) => {
  return new Response(JSON.stringify("Sucess"), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
})
.catch((error) => {
    return new Response(JSON.stringify("Error"), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
})

}
