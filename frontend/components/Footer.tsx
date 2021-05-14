import { NextPage } from "next";

const Footer: NextPage = () => (
  <footer className="footer bg-black py-40">
    <div className="max-w-screen-sm mx-auto text-beige grid grid-cols-2 gap-16 center items-center">
      <div>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Apps
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Email
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Posts
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Github
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Portfolio
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Twitter
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Services
          </li>
          <li className="bg-beige p-2 text-beige w-32 text-center rounded-xl bg-opacity-5 cursor-pointer ease-in-out duration-200 transform transition hover:scale-105 hover:bg-opacity-10">
            Instagram
          </li>
        </ul>
      </div>
      <p className="text-sm">
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
