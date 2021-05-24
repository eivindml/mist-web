import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "components/Layout";
import { Post } from "types";
import { client } from "lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { NextSeo } from "next-seo";

const Home: NextPage<{ post: Post }> = (props) => {
  console.log(props);
  return (
    <Layout alwaysShowMenu>
      <NextSeo
        title={`Mist — ${props.post.title}`}
        description={props.post.description}
        canonical="https://madebymist.com"
        openGraph={{
          url: `https://madebymist.com/text/${props.post.slug}`,
          title: props.post.title,
          description: props.post.description,
          site_name: "Mist",
          images: [
            {
              url: props.post.poster.url,
              width: props.post.poster.metadata.dimensions.width,
              height: props.post.poster.metadata.dimensions.height,
              alt: props.post.posterAlt,
            },
          ],
        }}
        twitter={{
          handle: "@eivindml",
          site: "@eivindml",
          cardType: "summary_large_image",
        }}
      />
      <article className="prose px-4 mx-auto max-w-screen-sm">
        <h1>{props.post.title}</h1>

        <BlockContent
          blocks={props.post.article}
          projectId="zs25h3xf"
          dataset="production"
        />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == "post"] {
    "slug": slug.current
  }`);

  return {
    paths: posts.map((p: any) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug;

  if (!slug || Array.isArray(slug)) throw new Error("Could not load post");

  const post = await client.fetch(`*[slug.current == "${slug}"]{
    ...,
    "poster": poster.asset->,
    "posterAlt": poster.caption,
    "slug": slug.current,
  }[0]`);

  return {
    props: {
      post,
    },
  };
};

export default Home;
