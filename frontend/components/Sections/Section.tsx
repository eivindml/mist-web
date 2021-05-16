import { NextPage } from "next";
import Button from "../Button";
import cs from "classnames";
import Image from "next/image";

interface SectionProps {
  alternate: boolean;
  title: string;
  body: string;
  illustration: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  link: {
    url: string;
    title: string;
  };
}

const Section: NextPage<SectionProps> = (props) => {
  return (
    <>
      <div className={cs("flex flex-col sm:flex-row sm:items-center")}>
        <div
          className={cs(
            "w-48 mx-auto mb-8 sm:mb-0 relative sm:w-4/12 flex-shrink-0 flex-grow-0",
            {
              "sm:order-last": props.alternate,
            }
          )}
        >
          <Image
            src={props.illustration.src}
            alt={props.illustration.alt}
            width={props.illustration.width}
            height={props.illustration.height}
            layout="responsive"
          />
        </div>
        <div
          className={cs("", {
            "sm:ml-16 lg:ml-48": !props.alternate,
            "sm:mr-16 lg:mr-48": props.alternate,
          })}
        >
          <h2 className="text-center sm:text-left text-black mb-8 text-2xl md:text-4xl font-extrabold">
            {props.title}
          </h2>
          <p className="text-center sm:text-left text-lg text-black mb-12 text-md">
            {props.body}
          </p>
          <div className="flex justify-center sm:block">
            <Button
              type="internal"
              title={props.link.title}
              url={props.link.url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
