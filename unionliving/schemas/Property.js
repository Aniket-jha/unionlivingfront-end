export default{
    name:"property",
    title:"Property",
    type:"document",
    fields:[
        {
            name:"propertyName",
            title:"Property Name",
            type:"string"
        },
        {
            name:"propertyStartingPrice",
            title:"Property Starting Price",
            type:"string"
        },
        {
            name:"youtubeVideo",
            title:"Youtube Video",
            type:"string"
        },
        {
            name:"propertyLocation",
            title:"Property Location",
            type:"string",
        },
        {
            name:"propertyImages",
            title:"Property Images",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"propertyMap",
            title:"PropertyMap",
            type:"string"
        },
        {
            name:"propertyshortContent",
            title:"Property Short Content",
            type:"string"
        },
        {
            name:"propertyLongContent",
            title:"Property Long Content",
            type:"string"
        },
        {
            name:"amenities",
            title:"Amenities",
            type:"array",
            of:[{type:"amenities"}]
        },
        {
            name:"beds",
            title:"Beds",
            type:"string"
        },
        {
            name:"rooms",
            title:"Rooms",
            type:"array",
            of:[{type:"roomContent"}]
        },
        {
            name:"comparison",
            title:"Comparison",
            type:"image"
        },
        {
            name:"soldOutImage",
            title:"Sold Out Image",
            type:"image"
        }
        

    ]
}