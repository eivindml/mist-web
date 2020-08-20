import { useState } from "react";
import { NextPage } from "next";
import Modal from "../Modal";
import Section from "./Section";
import ModalContent from "../ModalContent";

const Sections: NextPage = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => {
    console.log("here");
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
        action={{
          title: "Send me an e-mail",
          url: "mailto:eivindml@icloud.com",
        }}
        dismiss={{
          title: "Dismiss",
          onClick: handleClose,
        }}
      >
        <ModalContent
          title="What I can offer."
          body="Hello world. This is my text."
        />
      </Modal>
      <div className="sections">
        <Section
          alternate={false}
          title="I happily do collaborative projects with others."
          illustration="/illustration-clients.png"
          body="I have collaborated with lots of talented agencies, and would like to do more of it. If you have a project that needs a developer, wether its an app for the Apple ecosystem or a website, feel free to get in touch."
          link={{
            title: "View my services",
            url: "/",
          }}
          handleOpen={handleOpen}
        />
        <Section
          alternate={true}
          title="The rest of my time is spent creating my own projects."
          body="My passion lies in solving everyday issues and creating high quality and delightful native apps for the Apple ecosystem. Part of my time is spent doing exactly this."
          illustration="/illustration.png"
          link={{
            title: "Play with my apps",
            url: "/",
          }}
          handleOpen={handleOpen}
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
