import { NextPage } from "next";
import Layout from "../components/Layout";
import SignUp from "../components/SignUp";

const Minutes: NextPage = () => (
  <div>
    <div className="home__main">
      <Layout>
        Hello
        <SignUp />
      </Layout>
    </div>
    <style jsx>{`
      .home__main {
        background-color: #fffefa;
        background-color: color(display-p3 1 1 0.98);
        background-color: #fcfaf4;
        min-height: 100vh;
        z-index: 2;
        position: relative;
        padding-bottom: calc(var(--line-height) * 10);
        border-radius: 13px;
        margin: 13px;
         {
          /* display: grid;
        grid-gap: calc(var(--line-height) * 2);
        margin-bottom: calc(var(--line-height) * 5);
        grid-template-columns: repeat(12, 1fr); */
        }
      }

      :global(body) {
        background-color: white;
      }

      :global(p),
      :global(h1),
      :global(h2),
      :global(h3),
      :global(h4),
      :global(h5),
      :global(h6),
      :global(body),
      :global(html),
      :global(input) {
        font-size: 27px;
        line-height: 39px;
        font-weight: 400;
      }

      :global(:root) {
        --line-height: 13px;
      }
    `}</style>
  </div>
);

export default Minutes;
