
import imageUrlBuilder from "@sanity/image-url"
import { createClient } from "@sanity/client"; 
// const {createClient} = require('@sanity/client')

const mysanityClient = createClient ({
    projectId:  "j7tne42c",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-31"
})

const builder = imageUrlBuilder(mysanityClient);

export const urlFor = (source) => builder.image(source);

export default mysanityClient;