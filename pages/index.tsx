import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

// TODO: Add projects section
// TODO: Add Dark Mode + Toggle button
const Home = () => (
  <Layout>
    <section>
      <Hero />
    </section>
    <section className='pull'>
      <h2 id="apps">Apps</h2>
      <Projects />
    </section>
    <section className='pull'>
      <h2 id="work">Client work</h2>
      <Projects />
    </section>
    <style jsx>{`
      h2 {
        font-size: 1.5em;
        font-weight: 700;
        margin: 0;
        padding: 0;
      }

      section {
        margin-top: 160px;
      }

      section.pull {
        width: calc(900px + ((100vw - 900px) / 2) - 20px);
        max-width: calc(100vw - 20px);
      }
    `}</style>
  </Layout>
);

export default Home
