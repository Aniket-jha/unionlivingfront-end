export default{
    name:"homeContent",
    title:"Home Content",
    type:"document",
    fields:[
        {
            name:"homeBanner",
            title:"Home Banner",
            type:"file"
        },
        {
            name:"studentImage",
            title:"Student Image",
            type:"image"
        },
         {
            name:"studentMobileImage",
            title:"Student Mobile Image",
            type:"image"
        },
         {
            name:"workMobileImage",
            title:"Work Mobile Image",
            type:"image"
        },
         {
            name:"workImage",
            title:"Work Image",
            type:"image"
        },
        {
            name:"guesswork",
            title:"GuessWork",
            type:"image"
        },
         {
            name:"missing",
            title:"Missing",
            type:"image"
        },
         {
            name:"rents",
            title:"Rents",
            type:"image"
        },
         {
            name:"responsive",
            title:"Responsive",
            type:"image"
        },
        {
            name:"ctaImage",
            title:"Cta Image",
            type:"image"
        },
        {
            name:"mainIcons",
            title:"Main Icons",
            type:"array",
            of:[{type:"homeIcons"}]
        },
        {
            name:"homeContentOne",
            title:"Home Content One",
            type:"string"
        },
        {
            name:"homeContentTwo",
            title:"Home Content Two",
            type:"string"
        },
    ]
}