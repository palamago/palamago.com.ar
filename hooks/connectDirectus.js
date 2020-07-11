import DirectusSDK from '@directus/sdk-js';

// main client instance
export const client = new DirectusSDK({
  url: 'https://api.palamago.com.ar/',
  project: "api",
});

export async function getAllItems(collectionName) {
  let result;
  try {
    result = await client.getItems(collectionName);
  } catch (err) {
    console.error(err);
  }

  return result;
}
