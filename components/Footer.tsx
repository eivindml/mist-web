import { NextPage } from "next";
import Contact from "./Contact";

const Footer: NextPage = () => (
  <div className="footer">
    <Contact
      title="Contact"
      body="Get in touch with me through email eivindml@icloud.com."
    />

    <Contact
      title="Follow"
      body="Join me on Instagram to follow the work I do @eivindml."
    />

    <Contact
      title="Visit"
      body="Visit me at my desk at the co-work space @greenhouse."
    />

    <style jsx>{`
      .footer {
        background-color: #151714;
        color: #fffefa;
        padding: 24px;
      }
    `}</style>
  </div>
);

export default Footer;
