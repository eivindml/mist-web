// @ts-ignore
const RSS = require("rss");
const fs = require("fs");
const path = require("path");
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "zs25h3xf",
  dataset: "production",
  token:
    "skLGoo9otKrQNNAYUTT21amLbeh204CpEQHOREf3H6LGjRl5z6SU1YVMzoLyIIzOuKapSjWYYMgl33Edzb9ik3lv6XQRwKtFNZqfCNp9dstihgik3uIxlYSjS531cuslo3Ocy3EpVmUJ6o2gwkXZlbqptT9XgbuvOTsxFm6DS2m3VtOHcc5q",
});

(async () => {
  const posts =
    await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    title,
    description,
    published,
    article,
    "poster": poster.asset->
  }`);

  // setup our feed instance with some high level data
  // I often keep this kind of data in package.json or a config file
  // so that it can be shared with other things that need it, i.e. next-seo
  const feed = new RSS({
    title: `Texts by Eivind Lindbråten`,
    description:
      "Texts written by Eivind Lindbråten, published at the Mist website madebymist.com.",
    feed_url: `https://madebymist.com/rss.xml`,
    site_url: `https://madebymist.com`,
    managingEditor: "Eivind Lindbråten",
    webMaster: "Eivind Lindbråten",
    copyright: `2021 Eivind Lindbråten`,
    language: "en",
    pubDate: new Date().toLocaleString(),
    ttl: "60",
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: post._id,
      description: post.description,
      url: `https://madebymist.com/text/${post.slug}`,
      author: "Eivind Linbråten",
      date: post.published,
    });
  });

  // this will generate our XML for our feed, no more messing with templates!
  const xml = feed.xml({ indent: true });

  // NextJS looks for static files in the public directory, so that is
  // where we will write our file
  fs.writeFileSync(path.resolve(__dirname, "public") + "/rss.xml", xml);
})();
