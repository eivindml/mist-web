import { NextPage } from "next";
import Mist from "@eivindml/mist-animation";

const Hero: NextPage = () => (
  <div className="hero">
    <div className="hero__animation">{/* <Mist /> */}</div>
    <div className="hero__container mx-auto">
      <h1 className="hero__title font-black text-6xl">
        Mist is a one-man studio
        <br />
        handcrafting apps
        <br />
        and websites.
      </h1>
    </div>
    <style jsx>{`
      .hero {
        height: 86vh;
        position: relative;
        display: flex;
        align-items: center;
        min-height: 600px;
      }

      .hero__animation {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100%;
        margin-left: -50vw;
        left: 50%;
        z-index: 1;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-delay: 0s;
        animation-name: fadeIn;
        opacity: 0;
        animation-fill-mode: forwards;
      }

      .hero__title {
        margin-top: -4rem;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        animation-name: fadeInAndSlideUp;
        opacity: 0;
        animation-fill-mode: forwards;
        position: relative;
        z-index: 2;
         {
          /* background: -webkit-linear-gradient(
          -67deg,
          rgba(0, 0, 0, 0.5),
          #121211
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        }
      }

      .hero__title :global(span) {
        white-space: nowrap;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeInAndSlideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    `}</style>
  </div>
);

export default Hero;
