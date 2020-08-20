import { NextPage } from "next";
import Mist from "@eivindml/mist-animation";

const Hero: NextPage = () => (
  <div className="hero">
    <img src="/logo.png" className="hero__logo" />
    <div className="hero__animation">{/* <Mist /> */}</div>
    <div className="hero__container">
      <h1 className="hero__title">
        <span>Mist is a one-man studio</span>
        <span>handcrafting apps</span>
        <span>and websites.</span>
      </h1>
    </div>
    <style jsx>{`
      .hero {
        height: 75vh;
        position: relative;
        display: flex;
        align-items: center;
        min-height: 600px;
      }

      .hero__logo {
        position: absolute;
        left: -2px; // Optical placement
        top: calc(var(--line-height) * 2);
        height: var(--line-height);
        display: block;
      }

      .hero__container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }

      .hero__animation {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
      }

      .hero__title {
        font-weight: 900;
        line-height: 32px;
        grid-column: 1 / 12;
        font-size: 26px;
      }
      @media(min-width: 490px) {
        .hero__title {
          line-height: 40px;
          font-size: 32px;
        }
      }
      @media(min-width: 560px) {
        .hero__title {
          line-height: 52px;
          font-size: 42px;
        }
      }
      @media(min-width: 680px) {
        .hero__title {
          line-height: 65px;
          font-size: 52px;
        }
      }
      @media(min-width: 780px) {
        .hero__title {
          grid-column: 2 / 10;
        }
      }
      @media(min-width: 980px) {
        .hero__title {
          grid-column: 3 / 8;
        }
      }
      .hero__title :global(span) {
        display: inline-block;
        white-space: nowrap;
      }
    `}</style>
  </div>
);

export default Hero;
