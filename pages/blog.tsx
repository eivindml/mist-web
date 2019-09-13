import Layout from '../components/Layout'
import moment from 'moment'
import Content from '../components/Content'

// TODO: Read metadata from file
// https://dev.to/ankursheel/automating-the-creation-of-a-new-blog-post-3pba
// TODO: Add steps for static exporting blog posts to html: https://alehatsman.com/post/static_blog_generator_using_nextjs_styledcomponents_mdx.html

// TODO: How is this cached? Research how we can heavily cache this site,
// both in browser, and using zeit/cachefly/etc.

function processPosts (posts) {
  const parsedPosts = parsePosts(posts)
  const filterPosts = filterPublic(parsedPosts)
  const sortedPosts = sortPosts(filterPosts)
  return sortedPosts
}

function parsePosts (posts) {
  return posts
    .map(p => ({
      ...p.meta,
    //   ...p.meta,
      // createdAt: moment(p.meta.createdAt),
      Doc: p.default
    }))
}

function filterPublic (posts) {
  return posts
    .filter(p => p.public)
}

function sortPosts (posts) {
  posts.sort((a, b) => a.createdAt.isBefore(b.createdAt) ? 1 : -1)
  return posts
}

function requirePosts () {
  function requireAll (r) {
    return r.keys().map(r)
  }
  return requireAll(require.context('../posts', true, /\.mdx$/))
  // return require.context('../posts', true, /\.mdx$/).keys()
}

const posts = parsePosts(requirePosts())

function findDoc (id) {
  console.log(posts[id])
  return posts[id].Doc
}

findDoc(0)

const Doc = findDoc(0)

const Test = ({ children }) => (
  <div>
    {children}
  </div>
)


// TODO: Skrive veldig kort blogpost om hvordan man kan sette opp blogg med

const Index = () => (
  <Layout>
    {posts.map(post =>
      <Content Doc={post.Doc} />
    )

    }

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
