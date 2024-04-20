import { createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  // Check if the source is defined before creating the image URL
  if (source) {
    return builder.image(source);
  } else {
    // Handle the case where the source is undefined
    console.error('Image source is undefined');
    return null; // or return a default image URL if needed
  }
};