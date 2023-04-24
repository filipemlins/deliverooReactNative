import sanityClient, { SanityClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = SanityClient ({
    projectId:  "j7tne42c",
    dataset: "production",
    useCdn: true,
    apiVersion: "2304391835"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;