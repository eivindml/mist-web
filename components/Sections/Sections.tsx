import { NextPage } from "next";
import Section from "./Section";

const Sections: NextPage = () => (
  <div className="sections">
    <Section
      alternate={false}
      title="I happily do collaborative projects with others."
      body="I have collaborated with lots of talented agencies, and would like to do more of it. If you have a project that needs a developer, wether its an app for the Apple ecosystem or a website, feel free to get in touch."
      link={{
        title: "View my services",
        url: "/",
      }}
    />
    <Section
      alternate={true}
      title="The rest of my time is spent creating my own projects."
      body="My passion lies in solving everyday issues and creating high quality and delightful native apps for the Apple ecosystem. Part of my time is spent doing exactly this."
      link={{
        title: "Play with my apps",
        url: "/",
      }}
    />
    <style jsx>{`
      .sections {
        display: grid;
        grid-gap: calc(var(--line-height) * 5);
      }
    `}</style>
  </div>
);

export default Sections;
