import { NextPage } from "next";

const Footer: NextPage = () => (
  <footer className="footer bg-black py-40">
    <div className="max-w-screen-sm mx-auto text-beige grid grid-cols-2 gap-16 center items-center">
      <div>
        <ul className="grid grid-cols-2">
          <li>Services</li>
          <li>Apps</li>
          <li>Posts</li>
          <li>Email</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Github</li>
        </ul>
      </div>
      <p className="text-sm">
        Site made with React, Gatsby, Netlify and Contentful. Learn how.
        Design+Code © 2020 Terms of Service - Privacy Policy Need help? Contact
        Us
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
