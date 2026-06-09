export async function GET(request) {
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
const params = url.searchParams;
const airlineVar = params.get('airline')
const planeVar = params.get('plane')
const imagePath = params.get('imagepath')

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      metadata: `airline=${airlineVar}|plane=${planeVar}`
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagePath, options);
      console.log(result);

        return new Response(JSON.stringify(result.secure_url), {
         status: 200,
         headers: { 'Content-Type': 'application/json' },
  });

    } catch (error) {
        return new Response(JSON.stringify(error), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
  });
    }
};
}