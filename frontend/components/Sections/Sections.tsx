import { NextPage } from "next";
import Section from "./Section";

const Sections: NextPage = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto grid gap-32 md:gap-48 lg:gap-64">
        <div className="sections__section">
          <Section
            alternate={false}
            title="I happily do collaborative projects with others."
            illustration={{
              src: "/collab.png",
              width: 1012,
              height: 982,
              alt: "Illustration showing logos from some of the companies I've worked with.",
            }}
            body="I have collaborated with lots of talented agencies, and would like to do more of it. If you have a project that needs a developer, whether its an app for the Apple ecosystem or a website, feel free to get in touch."
            link={{
              title: "View services",
              url: "/services",
            }}
          />
        </div>
        <div className="sections__section max-w-screen-lg mx-auto">
          <Section
            alternate={true}
            title="The rest of my time is spent creating my own projects."
            body="My passion lies in solving everyday issues and creating high quality and delightful native apps for the Apple ecosystem. Part of my time is spent doing exactly this."
            illustration={{
              src: "/apps.png",
              alt: "Illustration showing a 3D render of an app icon.",
              width: 838,
              height: 838,
            }}
            link={{
              title: "Go to Minutes",
              url: "/minutes",
            }}
          />
        </div>
        <style jsx>{`
          .sections__section {
            animation-duration: 500ms;
            animation-timing-function: ease-out-out;
            animation-delay: 3s;
            animation-name: fadeInAndSlideUp;
            opacity: 0;
            animation-fill-mode: forwards;
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
    </>
  );
};

export default Sections;
