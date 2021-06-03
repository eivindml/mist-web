import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "components/Layout";
import { client } from "lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

interface PageProps {
  page: any;
  websiteConfig: {
    footerMenu: Array<any>;
    headerMeny: Array<any>;
  }; // TODO: Type array
}

const Page: NextPage<PageProps> = (props) => {
  return (
    <Layout alwaysShowMenu footerMenu={props.websiteConfig.footerMenu}>
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

  const websiteConfig = await client.fetch(`*[_id == "websiteConfig"]{
    ...,
      _id,
      _key,
      "footerMenu": footerMenu[] {
        title,
        _key,
        _type,
        "slug": reference->slug.current,
        url
      }
    
  }[0]`); // TODO: Share this between index.tsx and [page].tsx

  return {
    props: {
      page,
      websiteConfig,
    },
  };
};

export default Page;
