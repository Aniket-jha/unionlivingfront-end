import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId:"ef0naahh",
    dataset:'production',
    apiVersion:'2022-10-11',
    userCdn:true,
    token:"skbF0pqd7zNRN0rMCvFlxKJ4fQZcjHc8PpjGqHZ3H5h9hrBHhrKj1FOamec2k3htMCQGDICJUt4SVzU4Pj8saADKNDFlOcX5IR25Ia58o6Kstiqu03DP7bX7ZrBT1LpjXzcNzQZYkX3EaDZ7CR8K3fhYXm5GqD21GklWgrKdQc6fm0AXz8bs"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);