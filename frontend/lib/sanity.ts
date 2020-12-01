const sanityClient = require("@sanity/client");

export default sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
});
