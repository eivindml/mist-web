import { NextPage } from "next";
import Button from "../Button";
import cs from "classnames";
import Image from "next/image";

interface SectionProps {
  alternate: boolean;
  title: string;
  body: string;
  illustration: string;
  alt: string;
  link: {
    url: string;
    title: string;
  };
  handleOpen(): void;
}

const Section: NextPage<SectionProps> = (props) => {
  return (
    <>
      <div className={cs("flex flex-row")}>
        <div className="md:w-3/5">
          <h2 className="text-black mb-8 text-4xl font-extrabold">
            {props.title}
          </h2>
          <p className="text-lg text-black mb-12 text-md">{props.body}</p>
          <div className="">
            <Button title={props.link.title} onClick={props.handleOpen} />
          </div>
        </div>
        <div
          className={cs("w-full md:w-2/5", {
            "order-first md:pr-32": props.alternate,
            "md:pl-32": !props.alternate,
          })}
        >
          <Image
            src={`/${props.illustration}.png`}
            alt={props.alt}
            width="100"
            height="100"
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
};

export default Section;
