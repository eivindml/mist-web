import { GetStaticProps, NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import Values from "../components/Values";
import { NextSeo } from "next-seo";
import { client } from "lib/sanity";

interface HomePageProps {
  websiteConfig: {
    footerMenu: Array<any>;
    headerMeny: Array<any>;
  }; // TODO: Type array
}

const Home: NextPage<HomePageProps> = (props) => (
  <div>
    <NextSeo
      title="Mist"
      description="Mist is a one-man studio handcrafting apps and websites."
      canonical="https://madebymist.com"
      openGraph={{
        url: "https://madebymist.com",
        title: "Mist–a one-man studio",
        description: "Mist is a one-man studio handcrafting apps and websites.",
        images: [
          {
            url: "https://madebymist.com/social.png",
            width: 1200,
            height: 600,
            alt: "Social sharing image for the Mist website",
          },
        ],
        site_name: "Mist",
      }}
      twitter={{
        handle: "@eivindml",
        site: "@eivindml",
        cardType: "summary_large_image",
      }}
    />
    <div className="bg-beige">
      <Layout noTopPadding footerMenu={props.websiteConfig.footerMenu}>
        <div className="">
          <Hero />
        </div>
        <div className="mb-32 md:mb-48 lg:mb-64">
          <Sections />
        </div>
        <div className="">
          <Values />
        </div>
      </Layout>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
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
    
  }[0]`);

  return {
    props: {
      websiteConfig,
    },
  };
};

export default Home;
