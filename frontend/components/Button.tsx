import { NextPage } from "next";
import Link from "next/link";
import cs from "classnames";

interface ButtonProps {
  title: string;
  url?: string;
  dismiss?: boolean;
  small?: boolean;
  type: "internal" | "external";
}

const Button: NextPage<ButtonProps> = (props) => (
  <div
    className={cs(
      "button bg-black text-beige rounded-md transform ease-in-out duration-200 hover:translate-x-1",
      {
        "button--dismiss": props.dismiss,
        "button--small": props.small,
      }
    )}
  >
    {props.type === "external" && (
      <a
        className="button__wrapper text-md  font-bold"
        href={props.url}
        target="_blank"
        rel="noopener"
      >
        {props.title}
      </a>
    )}

    {props.type === "internal" && (
      <Link href={props.url}>
        <a className="button__url button__wrapper">{props.title}</a>
      </Link>
    )}

    <style jsx>{`
      .button {
        display: inline-block;

        -webkit-tap-highlight-color: rgba(
          0,
          0,
          0,
          0
        ); // Disable tap highlight square

        cursor: pointer;

        will-change: transform;
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
