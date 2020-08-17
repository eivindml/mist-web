import { NextPage } from "next";

interface LayoutProps {
  children: any;
}

const Layout: NextPage<LayoutProps> = (props) => (
  <div className="layout">
    {props.children}
    <style jsx>{`
      .layout {
        max-width: 1108px;
        margin: 0 var(--line-height);
      }
      @media (min-width: 1148px) {
        .layout {
          margin: 0 auto;
        }
      }
    `}</style>
  </div>
);

export default Layout;
