import { NextPage } from "next";
import cs from "classnames";
import Button from "./Button";

interface Action {
  title: string;
  url?: string;
  onClick?(): void;
}

interface ModalProps {
  show: boolean;
  handleClose(): void;
  children: any;
  actions?: Array<Action>;
  dismiss?: {
    title: string;
    onClick?(): void;
  };
}

const Modal: NextPage<ModalProps> = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={cs("modal", {})}>
      <div className="modal__main">
        {props.children}
        <div className="modal__buttons">
          {props.dismiss && (
            <Button
              title={props.dismiss.title}
              onClick={props.dismiss.onClick}
              dismiss
              small
            />
          )}
          {props.actions &&
            props.actions.map((action: Action) => (
              <Button
                title={action.title}
                onClick={action.onClick}
                url={action.url}
                small
                key={action.title}
              />
            ))}
        </div>
      </div>
      <style jsx>{`
        .modal {
          background: rgba(40, 40, 40, 0.4);
          position: fixed;
          overflow-y: scroll;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          animation-name: fadeIn;
          animation-duration: 300ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(5px);
          }
        }

        .modal__main {
          background-color: white;
          width: calc(100vw - (var(--line-height) * 1));
          max-width: 860px;
          border-radius: 30px;
          box-shadow: 0px 0px 250px rgba(0, 0, 0, 0.3);
          padding: calc(var(--line-height) * 1);
          box-sizing: border-box;
          animation-name: moveUp;
          animation-duration: 550ms;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          animation-delay: 150ms;
          opacity: 0;
        }
        @media (min-width: 600px) {
          .modal__main {
            width: calc(100vw - (var(--line-height) * 2));
            padding: calc(var(--line-height) * 2);
          }
        }

        @keyframes moveUp {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal__buttons {
          display: flex;
          justify-content: space-between;
          margin-top: calc(var(--line-height) * 2);
          flex-wrap: wrap;
          margin-bottom: -calc(var(--line-height) * 0.5);
        }
        @media (min-width: 600px) {
          .modal__buttons {
            margin-top: calc(var(--line-height) * 3);
          }
        }

        .modal__buttons > :global(*) {
          margin-bottom: calc(var(--line-height) * 0.5);
        }

        :global(body) {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Modal;
