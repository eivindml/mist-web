import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "components/Layout";
import { client } from "lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Home: NextPage<{ page: any }> = (props) => {
  return (
    <Layout alwaysShowMenu>
      <article className="prose px-4 mx-auto max-w-screen-sm">
        <h1>{props.page.title}</h1>

        <BlockContent
          blocks={props.page.content}
          projectId="zs25h3xf"
          dataset="production"
        />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.fetch(`*[_type == "page"] {
    "slug": slug.current
  }`);

  return {
    paths: posts.map((p: any) => ({
      params: {
        page: p.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.page;

  if (!slug || Array.isArray(slug)) throw new Error("Could not load post");

  const page = await client.fetch(`*[slug.current == "${slug}"][0]`);

  return {
    props: {
      page,
    },
  };
};

export default Home;
