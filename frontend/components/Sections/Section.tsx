import { NextPage } from "next";
import Button from "../Button";
import cs from "classnames";

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
      <div
        className={cs("flex space-x-8 section", {
          "section--alternate": props.alternate,
        })}
      >
        <div className="w-2/3">
          <h2 className="text-black mb-8 text-4xl font-extrabold">
            {props.title}
          </h2>
          <p className="text-lg text-black mb-12 text-md">{props.body}</p>
          <div className="section__action">
            <Button title={props.link.title} onClick={props.handleOpen} />
          </div>
        </div>
        <div className="">
          <picture>
            <source
              srcSet={`/${props.illustration}.webp 1x, /${props.illustration}-2x.webp 2x`}
              type="image/webp"
            />
            <source
              srcSet={`/${props.illustration}.png 1x, /${props.illustration}-2x.png 2x`}
              type="image/png"
            />
            <img
              src={`/${props.illustration}-2x.png`}
              alt={props.alt}
              width="470"
              height="628"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Section;
