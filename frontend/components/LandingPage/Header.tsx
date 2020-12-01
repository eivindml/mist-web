import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <Image src="/minutes-icon.png" width={169} height={169} layout="fixed" />
      <div className="">
        <h1 className="header__title">Minutes</h1>
        <h3 className="header__subtitle">for iOS and macOS.</h3>
      </div>
      <style jsx>{`
        .header {
          display: grid;
          grid-gap: 13px;
          align-items: center;
        }
        @media (min-width: 600px) {
          .header {
            grid-gap: 39px;
            grid-template-columns: 169px 1fr;
          }
        }

        .header__title {
          font-weight: 800;
          letter-spacing: 1px;
          font-size: 78px;
          line-height: 1em;
        }

        .header__subtitle {
          color: rgba(0, 0, 0, 0.3);
          font-weight: 500;
          font-size: 27;
          line-height: 1.45em;
        }
      `}</style>
    </div>
  );
}

export default Header;
