import { NextPage } from "next";

interface LayoutProps {
  children: any;
}

const Layout: NextPage<LayoutProps> = (props) => (
  <div className="layout">
    {props.children}
    <style jsx>{`
      .layout {
        max-width: 1208px;
        margin: 0 var(--line-height);
      }
      @media (min-width: 1248px) {
        .layout {
          margin: 0 auto;
        }
      }
    `}</style>
  </div>
);

export default Layout;
