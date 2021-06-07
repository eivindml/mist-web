import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-grow-0 flex-shrink-0 transform hover:scale-105 hover:rotate-12 transition-transform duration-700 ease-in-out z-20">
        <Image
          src="/minutes-icon.png"
          width={169}
          height={169}
          alt="Minutes for iOS and macOS app icon"
          priority={true}
        />
      </div>

      <div className="mt-4 md:mt-0 md:ml-4">
        <h1 className="header__title font-bold text-5xl sm:text-6xl">
          Minutes
        </h1>
        <h3 className="text-xl font-semibold text-transparent-gray">
          for iOS and macOS.
        </h3>
      </div>
      <style jsx>{`
        .header__title {
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}

export default Header;
