import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Mist — one-man studio</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
          {/* <!-- Touch Icons - iOS and Android 2.1+ 180x180 pixels in size. --> */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* <!-- Firefox, Chrome, Safari, IE 11+ and Opera. 192x192 pixels in size. --> */}
          <link rel="icon" href="/favicon.png" />

          {/* <!-- Vector image for Safari pinned tab. Single layer svg with viewBox 0 0 16 16. --> */}
          <link rel="mask-icon" href="mask-icon.svg" color="#151714" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
