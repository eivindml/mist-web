import { NextPage } from "next";
import Image from "next/image";
import SignUp from "components/SignUp";
import Link from "next/link";
import Header from "components/LandingPage/Header";
import Text from "components/LandingPage/Text";
import { NextSeo } from "next-seo";

const Minutes: NextPage = () => (
  <div className="rounded-md m-4 bg-beige p-8 relative main">
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

    <div className="max-w-lg m-auto mt-8 md:mt-24">
      <div className="animate-slide-up opacity-0 delay-1000 forwards animation-delay-500">
        <Header />
      </div>
      <div className="mt-20 animate-slide-up opacity-0 animation-delay-2000 forwards">
        <Text />
      </div>
      <div className="mt-16 mb-16 animate-slide-up opacity-0 forwards animation-delay-3000">
        <SignUp />
      </div>
    </div>
    <Link href="/">
      <a className="home__logo">
        <Image src="/logo-small.png" width={51} height={26} loading="eager" />
      </a>
    </Link>

    <style jsx global>{`
      body {
        background-color: white;
      }
    `}</style>
    <style jsx>{`
      .main {
        min-height: calc(100vh - 2em);
      }

      .home__logo {
        position: fixed;
        left: 2.5em;
        bottom: 2em;
        opacity: 0.25;
        transition-properties: opacity transform;
        transition-duration: 350ms;
        transition-timing-function: cubic-bezier(0.84, 0.31, 0.29, 0.88);
      }
      .home__logo:hover {
        opacity: 0.85;
        transform: scale(0.95);
      }
    `}</style>
  </div>
);

export default Minutes;
