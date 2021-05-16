import { NextPage } from "next";
import Image from "next/image";
import SignUp from "components/SignUp";
import Link from "next/link";
import Header from "components/LandingPage/Header";
import Text from "components/LandingPage/Text";
import { NextSeo } from "next-seo";

const Minutes: NextPage = () => (
  <div>
    <NextSeo
      title="Minutes for iOS and macOS"
      description="A native iOS and macOS time tracker for freelancers and small businesses."
      canonical="https://madebymist.com/minutes"
      openGraph={{
        url: "https://madebymist.com/minutes",
        title: "Minutes for iOS and macOS",
        description:
          "A native iOS and macOS time tracker for freelancers and small businesses.",
        images: [
          {
            url: "https://madebymist.com/minutes-social.png",
            width: 1200,
            height: 600,
            alt: "Minutes for iOS and macOS",
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
    <div className="home__main m-2 rounded-md p-4 py-8">
      <div className="max-w-lg m-auto">
        <Header />
        <div className="mt-20">
          <Text />
        </div>
        <div className="mt-16 mb-16">
          <SignUp />
        </div>
        <Link href="/">
          <a className="home__logo">
            <Image
              src="/logo-small.png"
              width={51}
              height={26}
              loading="eager"
            />
          </a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .home__main {
        min-height: calc(100vh - 1rem);
        background-color: #fffefa;
        background-color: color(display-p3 1 1 0.98);
        background-color: #fcfaf4;
      }

      .home__logo {
        position: fixed;
        left: 26px;
        bottom: 13px;
        opacity: 0.25;
        transition-properties: opacity transform;
        transition-duration: 350ms;
        transition-timing-function: cubic-bezier(0.84, 0.31, 0.29, 0.88);
      }
      .home__logo:hover {
        opacity: 0.85;
        transform: scale(0.95);
      }

      :global(body) {
        background-color: white;
      }

      :global(:root) {
      }
    `}</style>
  </div>
);

export default Minutes;
