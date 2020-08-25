import { NextPage } from "next";
import { useState } from "react";
import Button from "./Button";
import Value from "./Value";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

enum State {
  Hidden,
  ShowContact,
}

const Values: NextPage = () => {
  const [state, setState] = useState(State.Hidden);

  const handleOpen = () => setState(State.ShowContact);
  const handleClose = () => setState(State.Hidden);

  return (
    <>
      <Modal
        show={state !== State.Hidden}
        handleClose={handleClose}
        actions={[
          {
            title: "Email",
            url: "mailto:eivindml@icloud.com",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/eivindml",
          },
          {
            title: "Instagram",
            url: "https://instagram.com/madebymist",
          },
        ]}
        dismiss={{
          title: "Dismiss",
          onClick: handleClose,
        }}
      >
        <ModalContent
          title="Get in touch."
          body="If you wan't to talk, the best way is to do that through email. If you are interested in following the progress of the apps and the company, you can do that through Instagram (where I'll post process images and videos) or Twitter (where I'll post thoughts and conversations)."
        />
      </Modal>

      <div className="values">
        <div className="values__cell">
          <h2 className="values__heading">
            All products are handcrafted with love and attention to details.
          </h2>

          <p className="values__body">
            An artisan is a skilled craft worker making material objects by
            hand, with a pride in one's own work, and a respect for tools and
            materials. I'm inspired by this tradition, and want to translate
            this into the crafting of digital products with the these
            principles:
          </p>

          <div className="values__items">
            <Value
              text="We create products, not code. Code is just a means to an end. Keep in mind that you are creating experiences for human beings."
              icon="/Product.png"
            />
            <Value
              text="We believe that «beauty lies in the details». You should spend that extra time and care to make everything feel right and delightful."
              icon="/Detail.png"
            />
            <Value
              text="We belive that «quality is the most important feature». Strive for bug-free products and experiences that feel lighter-than-air."
              icon="/Quality.png"
            />
            <Value
              text="We belive that data belongs to the user. Try to collect as little data as possible to achieve your goal, and always ask for concent."
              icon="/Privacy.png"
            />
          </div>

          <div className="values__action">
            <Button title="Get in touch" onClick={handleOpen} />
          </div>
        </div>

        <style jsx>{`
          .values {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
          }

          .values__cell {
            grid-column: span 12;
          }
          @media (min-width: 540px) {
            .values__cell {
              grid-column: 2 / span 10;
            }
          }
          @media (min-width: 1000px) {
            .values__cell {
              grid-column: 4 / span 6;
            }
          }

          .values__heading {
            font-size: 33px;
            line-height: 39px;
            font-weight: 800;
            margin-bottom: var(--line-height);
          }

          .values__body {
            margin-bottom: calc(var(--line-height) * 2);
          }

          .values__items {
            display: grid;
            grid-gap: calc(var(--line-height) * 2);
            margin-bottom: calc(var(--line-height) * 5);
          }
          @media (min-width: 630px) {
            .values__items {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .values__action {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </>
  );
};

export default Values;
