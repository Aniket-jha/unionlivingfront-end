export const propertyDetailQuery = (propertyId) => {
  const query = `*[_type == "property" && _id == '${propertyId}']{
    propertyImages,
    _id,
    propertyLocation, 
    propertyMap,
    propertyName,
    comparison,
    propertyLongContent,
    propertyshortContent,
    youtubeVideo,
    rooms,
    propertyStartingPrice,
    soldOutImage
   
  }`;
  return query;
};
export const reviewsQuery = () => {
  const query = `*[_type == "reviews" ]{
    video{
        asset->{
          _id,
          url
        }
      },
      
      
  }`;
  return query;
};