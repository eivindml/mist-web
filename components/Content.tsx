import { MDXProvider } from '@mdx-js/react'

export default ({ Doc }) => (
  <MDXProvider components={{}}>
    <Doc />
  </MDXProvider>
)
