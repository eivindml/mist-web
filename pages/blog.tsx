import Layout from '../components/Layout'
import {MDXProvider} from '@mdx-js/react'

// TODO: How can we import all files from the posts folder,
// and display them using a foor loop.
// TODO: How is this cached? Research how we can heavily cache this site,
// both in browser, and using zeit/cachefly/etc.
import Blog from '../posts/test.mdx'


// TODO: Skrive veldig kort blogpost om hvordan man kan sette opp blogg med

const Index = () => (
  <Layout>
    {<section><Blog /></section>}
    <style jsx global>{`
      // TODO: Add blogpost styling
      section h1 {
        font-weight: 700;
        display: block;
        font-size: 2em;
      }
      section p {
        font-size: 17px;
      }
    `}</style>
  </Layout>
);

export default Index;
