export default{
    name:"aboutContent",
    title:"About Content",
    type:"document",
    fields:[
        {
            name:"team",
            title:"Team",
            type:"array",
            of:[{type:"team"}]
        },
       
        
        {
            name:"founders",
            title:"Founders",
            type:"array",
            of:[{type:"founders"}]
        },
        {
            name:"vision",
            title:"Vision",
            type:"aboutThings",
            
        },
        {
            name:"tech",
            title:"Tech",
            type:"aboutThings",
            
        },
        {
            name:"design",
            title:"Design",
            type:"aboutThings",
            
        },
        {
            name:"community",
            title:"Community",
            type:"aboutThings",
            
        },
         {
            name:"portfolio",
            title:"Portfolio",
            type:"aboutThings",
            
        }
    ]
}