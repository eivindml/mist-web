import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps {
  url: string;
  title: string;
  type?: "external" | "internal";
}

const Button = (props: ButtonProps) => {
  if (props.type === "external") {
    return (
      <a
        href={props.url}
        target="_blank"
        className="bg-beige p-2 text-beige w-full text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10 block"
      >
        {props.title}
      </a>
    );
  }

  return (
    <Link href={props.url}>
      <a className="bg-beige p-2 text-beiges text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10 block w-full">
        {props.title}
      </a>
    </Link>
  );
};

const Footer: NextPage = () => (
  <footer className="footer bg-black py-40 px-4">
    <div className="max-w-screen-sm mx-auto text-beige grid md:grid-cols-2 gap-16 center items-center">
      <div>
        <ul className="grid grid-cols-2 gap-4 justify-items-stretch block max-w-sm mx-auto">
          <li>
            <Button title="Minutes" url="/minutes" />
          </li>
          <li>
            <Button
              title="Email"
              url="mailto:eivindml@icloud.com"
              type="external"
            />
          </li>
          <li>
            <Button title="Texts" url="/text" />
          </li>
          <li>
            <Button
              title="Github"
              url="https://github.com/eivindml"
              type="external"
            />
          </li>
          <li>
            <Button title="Services" url="/services" />
          </li>
          <li>
            <Button
              title="Twitter"
              url="https://twitter.com/eivindml"
              type="external"
            />
          </li>
        </ul>
      </div>
      <p className="text-sm text-center md:text-left">
        Site made with Next.js and Sanity.
        <br />
        Mist © 2021. In Oslo, Norway.
      </p>
    </div>
    <div className="overscroll"></div>
    <style jsx>{`
      .overscroll {
        background-color: #121211;
        height: 600px;
        position: fixed;
        bottom: -300px;
        left: 0;
        right: 0;
        z-index: -1;
      }
    `}</style>
  </footer>
);

export default Footer;
