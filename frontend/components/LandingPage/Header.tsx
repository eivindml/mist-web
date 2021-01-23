function Header() {
  return (
    <div className="md:flex md:items-center">
      <div className="flex-grow-0 flex-shrink-0">
        <img
          src="/minutes-icon.png"
          width={169}
          height={169}
          className="transform hover:scale-105 hover:rotate-12 transition-transform duration-700 ease-in-out"
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
      <style jsx global>{`
        .header {
        }

        .header__title {
          letter-spacing: 1px;
        }

        .header__subtitle {
        }
      `}</style>
    </div>
  );
}

export default Header;
