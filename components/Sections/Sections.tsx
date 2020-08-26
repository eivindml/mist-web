import { useState } from "react";
import { NextPage } from "next";
import Modal from "../Modal";
import Section from "./Section";
import ModalContent from "../ModalContent";

enum State {
  Hidden,
  ShowServices,
  ShowApps,
}

const Sections: NextPage = () => {
  const [state, setState] = useState(State.Hidden);
  const handleOpen = (state: State) => () => setState(state);
  const handleClose = () => setState(State.Hidden);

  return (
    <>
      {state === State.ShowServices && (
        <Modal
          show={true}
          handleClose={handleClose}
          actions={[
            {
              title: "Send me an e-mail",
              url: "mailto:eivindml@icloud.com",
            },
          ]}
          dismiss={{
            title: "Dismiss",
            onClick: handleClose,
          }}
        >
          <ModalContent
            title="My services."
            body="I build native apps and custom websites. The apps are created using native Swift, and can be targeted for any of the Apple platforms: iOS, macOS, watchOS or tvOS, using the latest Apple technologies. I have experience with many of their frameworks, including ARKit (Augmented Reality) and SceneKit (3D). I really enjoy creating apps that fully integrate into and respect the Apple ecosystem. When I build websites, I'm currently using a tech stack consisting of Sanity for the backend CMS, and Next.js/React for the frontend. I usually write all custom CSS and animations, and can also create three dimensional interactive elements using Three.js."
          />
        </Modal>
      )}
      {state === State.ShowApps && (
        <Modal
          show={true}
          handleClose={handleClose}
          dismiss={{
            title: "Dismiss",
            onClick: handleClose,
          }}
        >
          <ModalContent
            title="My apps."
            body="I'm currently working on an interesting self-funded app project that will be released natively for both iOS and macOS. Check back soon (hopefully sometimes in September) for a new app landing page, where you can register your interest in the project, and sign up for beta testing. The app will be in a crowded category space, but will solve the problem in some new and fun ways."
          />
        </Modal>
      )}

      <div className="sections">
        <Section
          alternate={false}
          title="I happily do collaborative projects with others."
          alt="Illustration showing logos from some of the companies I've worked with."
          illustration="illustration-clients"
          body="I have collaborated with lots of talented agencies, and would like to do more of it. If you have a project that needs a developer, whether its an app for the Apple ecosystem or a website, feel free to get in touch."
          link={{
            title: "View my services",
            url: "/",
          }}
          handleOpen={handleOpen(State.ShowServices)}
        />
        <Section
          alternate={true}
          title="The rest of my time is spent creating my own projects."
          alt="Illustration showing a 3D render of an app icon."
          body="My passion lies in solving everyday issues and creating high quality and delightful native apps for the Apple ecosystem. Part of my time is spent doing exactly this."
          illustration="illustration-apps"
          link={{
            title: "Play with my apps",
            url: "/",
          }}
          handleOpen={handleOpen(State.ShowApps)}
        />
        <style jsx>{`
          .sections {
            display: grid;
            grid-gap: calc(var(--line-height) * 5);
          }
        `}</style>
      </div>
    </>
  );
};

export default Sections;
