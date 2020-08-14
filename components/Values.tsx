import { NextPage } from "next";

const Values: NextPage = () => (
  <div className="values">
    <h2 className="values__heading">
      All products are handcrafted with love and attention to details.
    </h2>

    <p>
      An artisan is a skilled craft worker making material objects by hand, with
      a pride in one's own work, and a respect for tools and materials. I'm
      inspired by this tradition, and want to translate this into the crafting
      of digital products with the these principles:
    </p>

    <style jsx>{`
      .values__heading {
        font-size: 33px;
        line-height: 39px;
        font-weight: 800;
      }
    `}</style>
  </div>
);

export default Values;
