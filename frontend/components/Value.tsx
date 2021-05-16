import { NextPage } from "next";

interface ValueProps {
  text: string;
  icon: string;
  alt: string;
}

const Value: NextPage<ValueProps> = (props) => (
  <div className="value">
    <img
      className="h-16 mb-4 mx-auto sm:mx-0"
      src={props.icon}
      alt={props.alt}
    />

    <p className="text-center sm:text-left">{props.text}</p>
  </div>
);

export default Value;
