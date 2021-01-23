function Text() {
  return (
    <div className="">
      <h2 className="font-extrabold text-2xl mb-4 text-gradient">
        Time tracking finally done right.
        <br />
        Enjoyable and delightful.
      </h2>
      <p className="text-transparent-gray">
        Time tracking is an important part of our day. Unfortunately it's also
        one of the least enjoyable. That's why we are building Minutes. A native
        iOS and macOS app with a focus on ease of use, flexibility and enjoyable
        interactions. Sign up to be notified when we start beta testing and when
        the app is released to the App Store.
      </p>
      <style jsx>{`
        .text-gradient {
          background: -webkit-linear-gradient(-82deg, #f8e646, #ecab00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Text;
