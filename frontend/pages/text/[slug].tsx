import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "components/Layout";
import { Post } from "types";
import { client } from "lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Home: NextPage<{ post: Post }> = (props) => {
  return (
    <Layout alwaysShowMenu>
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

  const post = await client.fetch(`*[slug.current == "${slug}"][0]`);

  return {
    props: {
      post,
    },
  };
};

export default Home;
