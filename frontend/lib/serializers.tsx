import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import swift from "react-syntax-highlighter/dist/cjs/languages/hljs/swift";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github-gist";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("swift", swift);

const Code = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter language={language || "text"} style={github}>
      {code}
    </SyntaxHighlighter>
  );
};

export const serializers = {
  types: {
    code: Code,
  },
};
