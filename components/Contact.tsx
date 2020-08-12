import { NextPage } from "next";

interface ContactProps {
  title: string;
  body: string;
}

const Contact: NextPage<ContactProps> = (props) => (
  <div className="contact">
    <img className="contact__icon" src="/instagram.png" />

    <h3 className="contact__title">{props.title}</h3>

    <p className="contact__body">{props.body}</p>

    <style jsx>{`
      .contact {
        background-color: #151714;
        color: #fffefa;
        padding: 24px;
      }

      .contact__icon {
        width: 46px;
        margin-bottom: 26px;
        line-height: 0;
        display: block;
        opacity: 25%;
      }

      .contact__title {
        font-weight: 900;
      }

      .contact__body {
      }
    `}</style>
  </div>
);

export default Contact;
