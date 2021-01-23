import { NextPage } from "next";
import Image from "next/image";
import SignUp from "components/SignUp";
import Link from "next/link";
import Header from "components/LandingPage/Header";

const Minutes: NextPage = () => (
  <div>
    <div className="home__main inset-2 rounded-md p-4">
      <div className="max-w-md m-auto">
        <Header />
        <div className="mt-16">
          <SignUp />
        </div>
        <Link href="/">
          <a className="home__logo">
            <Image src="/logo-small.png" width={51} height={26} />
          </a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .home__main {
        background-color: #fffefa;
        background-color: color(display-p3 1 1 0.98);
        background-color: #fcfaf4;
        z-index: 2;
        position: fixed;
      }

      .home__logo {
        position: absolute;
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

      :global(p),
      :global(h1),
      :global(h2),
      :global(h3),
      :global(h4),
      :global(h5),
      :global(h6),
      :global(body),
      :global(html),
      :global(input) {
        font-size: 27px;
        line-height: 39px;
        font-weight: 400;
      }

      :global(:root) {
        --line-height: 13px;
      }
    `}</style>
  </div>
);

export default Minutes;
