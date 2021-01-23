import { NextPage } from "next";
import cs from "classnames";

interface ButtonProps {
  title: string;
  onClick?(): void;
  url?: string;
  dismiss?: boolean;
  small?: boolean;
}

const Button: NextPage<ButtonProps> = (props) => (
  <div
    className={cs("button", {
      "button--dismiss": props.dismiss,
      "button--small": props.small,
    })}
  >
    {props.onClick && (
      <div className="button__wrapper text-sm" onClick={props.onClick}>
        {props.title}
      </div>
    )}

    {!props.onClick && props.url && (
      <a
        className="button__url button__wrapper"
        href={props.url}
        target="_blank"
        rel="noopener"
      >
        {props.title}
      </a>
    )}

    <style jsx>{`
      .button {
        background-color: #027aff;
        display: inline-block;
        color: white;
        font-weight: 700;
        -webkit-tap-highlight-color: rgba(
          0,
          0,
          0,
          0
        ); // Disable tap highlight square
        border-radius: 36px;
        cursor: pointer;
        box-shadow: 0 2px 13px rgba(2, 122, 255, 0.3);
        transition-property: transform box-shadow;
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.78, 1.93, 0.37, 0.74);
        will-change: transform box-shadow;
        transform: scale(1);
      }
      .button:hover {
        box-shadow: 0px 2px 70px rgba(2, 122, 255, 0.3),
          0px 0px 15px rgba(2, 122, 255, 0.3);
        transform: scale(1.04);
      }
      .button--dismiss {
        background-color: #777;
        box-shadow: 0 2px 13px rgba(122, 122, 122, 0.3);
      }
      .button--dismiss:hover {
        box-shadow: 0px 2px 70px rgba(122, 122, 122, 0.3),
          0px 0px 15px rgba(122, 122, 122, 0.3);
      }
      .button--small:hover {
        box-shadow: none;
      }

      .button__wrapper {
        padding: 18px 36px;
        line-height: 1em;
        display: block;
      }
      .button--small .button__wrapper {
        padding: 7px 16px;
        box-shadow: none;
      }
      @media (min-width: 600px) {
        .button--small .button__wrapper {
          padding: 14px 32px;
        }
      }

      .button__url {
        text-decoration: none;
        color: white;
      }
    `}</style>
  </div>
);

export default Button;
