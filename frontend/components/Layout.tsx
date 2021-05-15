import { NextPage } from "next";
import useScroll from "lib/useScroll";
import cs from "classnames";
import Link from "next/link";
import Footer from "components/Footer";
import Image from "next/image";

interface LayoutProps {
  children: any;
  alwaysShowMenu?: boolean;
}

const Layout: NextPage<LayoutProps> = (props) => {
  const scrollY = useScroll();

  return (
    <>
      <div
        className={cs(
          "l sticky border-b border-solid -top-4 z-10 transition ease-in-out duration-1000",
          {
            "border-beige": scrollY <= 100,
            "border-gray-200": scrollY > 100,
          }
        )}
      >
        <div className="max-w-screen-xl mx-auto flex items-center pt-4 px-4">
          <Link href="/">
            <a className="h-6 w-12 block relative flex-grow-0 flex-shrink-0 mr-20">
              <Image
                src="/logo.png"
                className=""
                loading="eager"
                alt="Logo for Mist, consisting of a mountain and some mist flowing by."
                layout="fill"
              />
            </a>
          </Link>

          <div
            className={cs(
              "w-0 relative transition-width ease-in-out duration-1000 overflow-hidden",
              {
                "w-full": scrollY > 200 || props.alwaysShowMenu,
              }
            )}
          >
            <div className="overflow-x-scroll py-4">
              <ul className={cs("flex items-center space-x-16")}>
                <li className="flex-grow-0 flex-shrink-0">
                  <MenuItem
                    title="Services"
                    iconUrl="/keyboard.png"
                    href="/services"
                  />
                </li>
                <li className="flex-grow-0 flex-shrink-0">
                  <MenuItem title="Apps" iconUrl="/app.png" href="/minutes" />
                </li>
                <li className="flex-grow-0 flex-shrink-0 pr-4">
                  <MenuItem
                    title="Texts"
                    iconUrl="/document.png"
                    href="/text"
                  />
                </li>
              </ul>
              <div className="bg-gradient-to-r from-transparent-beige to-beige absolute w-16 h-full right-0 top-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl m-auto pb-64">{props.children}</div>
      </div>
      <Footer />
      <style jsx>{`
        .l {
          backdrop-filter: blur(7px);
          background-color: rgba(249, 248, 242, 0.97);
        }
      `}</style>
    </>
  );
};

export default Layout;

interface MenuItemProps {
  title: string;
  href: string;
  iconUrl: string;
}

function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.href}>
      <a className="transition-transform ease-in-out duration-500  transform hover:-translate-y-0.5 flex items-center">
        <img src={props.iconUrl} className="h-4 mr-3" />
        <span className="font-bold text-sm">{props.title}</span>
      </a>
    </Link>
  );
}
