import { NextPage } from "next";
import Button from "./Button";
import Value from "./Value";

const Values: NextPage = () => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <div className="values__cell">
          <h2 className="max-w-xl text-black mb-8 text-2xl md:text-4xl font-extrabold text-center sm:text-left">
            All products are handcrafted with love and attention to details.
          </h2>

          <p className="mb-16 text-center sm:text-left">
            An artisan is a skilled craft worker making material objects by
            hand, with a pride in one's own work, and a respect for tools and
            materials. I'm inspired by this tradition, and want to translate
            this into the crafting of digital products with these principles:
          </p>

          <div className="grid gap-16 sm:grid-cols-2">
            <Value
              text="We create products, not code. Code is just a means to an end. Keep in mind that you are creating experiences for human beings."
              icon="/Product.png"
              alt="Small icon of an iPhone."
            />
            <Value
              text="We believe that «beauty lies in the details». You should spend that extra time and care to make everything feel right and delightful."
              icon="/Detail.png"
              alt="Small icon of a maginfying flass."
            />
            <Value
              text="We believe that «quality is the most important feature». Strive for bug-free products and experiences that feel lighter-than-air."
              icon="/Quality.png"
              alt="Small icon of a laurel wreath."
            />
            <Value
              text="We believe that data belongs to the user. Try to collect as little data as possible to achieve your goal, and always ask for consent."
              alt="Small icon of an eye."
              icon="/Privacy.png"
            />
          </div>

          <div className="mt-24 flex justify-center sm:block">
            <Button
              title="Get in touch"
              url="mailto:eivindml@icloud.com"
              type="external"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
