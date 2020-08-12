import { NextPage } from "next";

const Grid: NextPage = (props) => (
  <div className="grid">
    {props.children}
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 39px;
        grid-row-gap: 26px;
        max-width: 1209px;
        background-color: pink;
        margin: 0 auto;
        border: solid 2px blue;
      }
    `}</style>
  </div>
);

interface ColumnProps {
  span: 3 | 4 | 6 | 8 | 12;
  children: any;
}

const Column: NextPage<ColumnProps> = (props) => (
  <div className={`column column-${props.span}`}>
    <p>{props.children}</p>
    <style jsx>{`
      .column {
        border: solid 2px aquamarine;
      }

      .column-3 {
        grid-column: span 3;
      }

      .column-4 {
        grid-column: span 4;
      }

      .column-6 {
        grid-column: span 6;
      }

      .column-8 {
        grid-column: span 8;
      }

      .column-12 {
        grid-column: span 12;
      }
    `}</style>
  </div>
);

const Row: NextPage = (props) => (
  <div className="row">
    {props.children}
    <style jsx>{`
      .row {
        border: solid 2px red;
        grid-column: span 12;
      }
    `}</style>
  </div>
);

export default Grid;
export { Column, Row };
