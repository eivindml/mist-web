import { NextPage } from "next";

interface ButtonProps {
  title: string;
}

const Button: NextPage<ButtonProps> = (props) => (
  <div className="button">
    {props.title}
    <style jsx>{`
      .button {
        background-color: #027aff;
        display: inline-block;
        color: white;
        font-weight: 700;
        padding: 18px 36px;
        border-radius: 36px;
        cursor: pointer;
        box-shadow: 0 2px 13px rgba(2, 122, 255, 0.3);
        transition-property: transform box-shadow;
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.78, 1.93, 0.37, 0.74);
        will-change: transform box-shadow;
        backface-visibility: hidden;
        transform: scale(1);
      }
      .button:hover {
        box-shadow: 0px 2px 70px rgba(2, 122, 255, 0.3),
          0px 0px 15px rgba(2, 122, 255, 0.3);
        transform: scale(1.04);
      }
    `}</style>
  </div>
);

export default Button;
