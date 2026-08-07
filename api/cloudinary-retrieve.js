import { v2 as cloudinary } from "cloudinary";

export async function GET(request) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const airline = params.get("airline");
  const plane = params.get("plane");
  const airport = params.get("airport");

  const filters = ["resource_type:image"];
  let finalFilters;

  if (airline) {
    filters.push(`metadata.airline="${airline}"`);
  }

  if (plane) {
    filters.push(`metadata.plane="${plane}"`);
  }

  if (airport) {
    filters.push(`metadata.airport="${airport}"`);
  }

  if (filters.length > 0){
  finalFilters = filters.join(" AND ")
  }

  const result = await cloudinary.search
    .expression(finalFilters)
    .execute();

  return Response.json(result.resources);
}