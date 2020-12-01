import { NextPage } from "next";

interface ModalContentProps {
  title: string;
  body: string;
}

const ModalContent: NextPage<ModalContentProps> = (props) => (
  <div className="modal-content">
    <h3 className="modal-content__title">{props.title}</h3>
    <p>{props.body}</p>
    <style jsx>{`
      .modal-content__title {
        font-size: 24px;
        font-weight: 900;
        margin-bottom: calc(var(--line-height) * 1);
        line-height: 1em;
      }
      @media (min-width: 600px) {
        .modal-content__title {
          font-size: 32px;
          margin-bottom: calc(var(--line-height) * 2);
        }
      }
    `}</style>
  </div>
);

export default ModalContent;
