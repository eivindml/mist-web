import Head from "next/head";
import "../reset.css";
import "../styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mist — one-man studio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mist is a one-man studio handcrafting apps and websites."
        />
        <meta
          name="keywords"
          content="mist, studio, apps, websites, norway, oslo, apple, ios, macos, watchos, tvos, swift, next.js, react, sanity, developer, freelancer"
        />
        <meta name="author" content="Eivind Lindbråten" />
        <meta name="copyright" content="Eivind Lindbråten" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#151714" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#fffefa" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
