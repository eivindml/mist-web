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
      <div className={cs("section", { "section--alternate": props.alternate })}>
        <div className="section__text">
          <h2 className="section__title">{props.title}</h2>
          <p className="section__body">{props.body}</p>
          <div className="section__action">
            <Button title={props.link.title} onClick={props.handleOpen} />
          </div>
        </div>
        <div className="section__illustration">
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
        <style jsx>{`
          .section {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-row-gap: calc(var(--line-height) * 1);
            align-items: center;
          }
          @media (min-width: 720px) {
            .section {
              grid-column-gap: calc(var(--line-height) * 2);
            }
          }

          .section__text {
            grid-column: 1 / span 12;
          }
          @media (min-width: 720px) {
            .section__text {
              grid-column: 1 / span 8;
            }
          }
          @media (min-width: 920px) {
            .section__text {
              grid-column: 2 / span 6;
            }
          }
          @media (min-width: 720px) {
            .section--alternate .section__text {
              grid-column: 5 / span 8;
            }
          }
          @media (min-width: 920px) {
            .section--alternate .section__text {
              grid-column: 6 / span 6;
            }
          }

          .section__illustration {
            grid-row: 1;
            grid-column: 1 / span 5;
          }
          @media (min-width: 720px) {
            .section__illustration {
              grid-row: auto;
              grid-column: span 4;
            }
          }
          @media (min-width: 720px) {
            .section--alternate .section__illustration {
              grid-row: 1;
              grid-column: 1 / span 4;
            }
          }
          @media (min-width: 920px) {
            .section--alternate .section__illustration {
              grid-column: 2 / span 4;
            }
          }
          .section__illustration > :global(* > *) {
            width: 100%;
            height: auto;
          }

          .section__title {
            font-size: 33px;
            line-height: 39px;
            font-weight: 800;
            margin-bottom: var(--line-height);
          }

          .section__body {
            margin-bottom: var(--line-height);
          }
        `}</style>
      </div>
    </>
  );
};

export default Section;
