import { NextPage } from "next";

interface ValueProps {
  text: string;
  icon: string;
  alt: string;
}

const Value: NextPage<ValueProps> = (props) => (
  <div className="value">
    <img className="value__icon" src={props.icon} alt={props.alt} />

    <p className="value__text">{props.text}</p>

    <style jsx>{`
      .value__icon {
        height: calc(var(--line-height) * 2);
        margin-bottom: calc(var(--line-height) * 1);
      }
    `}</style>
  </div>
);

export default Value;
