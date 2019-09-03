import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Index = ({ children }) => (
  <div>
    <Head>
      <title>Mist</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>

    <Navigation />

    <main>
      { children }
    </main>

    <Footer />

    <style jsx global>{`
      body, html, ul, p, li, img, a {
        margin: 0;
        padding: 0;
        line-height: 1em;
      }

      p, li, h1, h2, h3, html, body {
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 300;
        font-size: 15px;
        line-height: 1.5em;
      }

      main {
        padding: 20px;
        margin: 0 auto;
        max-width: 900px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Index;
