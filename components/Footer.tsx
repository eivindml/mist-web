import { NextPage } from "next";
import Contact from "./Contact";
import Layout from "./Layout";

const Footer: NextPage = () => (
  <div className="footer">
    <Layout>
      <div className="footer__grid">
        <div className="footer__cell">
          <Contact
            title="Contact"
            body="Get in touch with me through email ${email}."
            icon="/contact.png"
            link={{
              title: "eivindml@icloud.com",
              url: "mailto:eivindml@icloud.com",
              keyword: "${email}",
            }}
          />
        </div>

        <div className="footer__cell">
          <Contact
            title="Follow"
            body="Join me on Instagram to follow the work I do ${instagram}."
            icon="/follow.png"
            link={{
              title: "@eivindml",
              url: "https://instagram.com/eivindml",
              keyword: "${instagram}",
            }}
          />
        </div>

        <div className="footer__cell">
          <Contact
            title="Visit"
            body="Visit me at my desk at the co-work space ${greenhouse}."
            icon="/visit.png"
            link={{
              title: "@greenhouse",
              url: "https://www.greenhouseoslo.no",
              keyword: "${greenhouse}",
            }}
          />
        </div>
      </div>
    </Layout>
    <style jsx>{`
      .footer {
        background-color: #151714;
        color: #fffefa;
        padding: calc(var(--line-height) * 4) 0;
      }
      @media (min-width: 670px) {
        .footer {
          padding: calc(var(--line-height) * 4) var(--line-height);
        }
      }

      .footer__grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-row-gap: calc(var(--line-height) * 2);
      }
      @media (min-width: 620px) {
        .footer__grid {
          grid-column-gap: calc(var(--line-height) * 2);
        }
      }

      .footer__cell {
        grid-column-start: 1;
        grid-column: span 10;
      }
      @media (min-width: 620px) {
        .footer__cell {
          grid-column: span 4;
        }
      }
    `}</style>
  </div>
);

export default Footer;
