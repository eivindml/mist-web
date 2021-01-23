import { NextPage } from "next";

interface ContactProps {
  title: string;
  body: string;
  icon: string;
  alt: string;
  link: {
    title: string;
    url: string;
    keyword: string;
  };
}

const Contact: NextPage<ContactProps> = (props) => (
  <div className="contact">
    <img className="contact__icon" src={props.icon} alt={props.alt} />

    <h3 className="contact__title text-sm">{props.title}</h3>

    <p className="contact__body text-sm">
      {props.body.split(props.link.keyword)[0]}
      <a
        className="contact__body-link"
        href={props.link.url}
        target="_blank"
        rel="noopener"
      >
        {props.link.title}
      </a>
      {props.body.split(props.link.keyword)[1]}
    </p>

    <style jsx>{`
      .contact {
        background-color: #151714;
        color: #fffefa;
      }

      .contact__icon {
        width: 46px;
        margin-bottom: 26px;
        line-height: 0;
        display: block;
        opacity: 25%;
        margin-left: -2px; // Optical hanging margin
      }

      .contact__title {
        font-weight: 900;
      }

      .contact__body {
        hyphens: auto;
      }
      .contact__body-link {
        color: white;
        transition: opacity 300ms ease-out;
        text-decoration: none;
        opacity: 0.55;
      }
      .contact__body-link:hover {
        opacity: 1;
      }
    `}</style>
  </div>
);

export default Contact;
