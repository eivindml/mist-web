import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Layout from "components/Layout";
import { Post } from "types";
import { getPosts } from "pages/api/posts";
import { isRight } from "fp-ts/lib/Either";
import { mapLeft } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/pipeable";
import * as E from "fp-ts/lib/Either";
import { formatDistance } from "date-fns";
import Image from "next/image";

const Home: NextPage<{ posts: Array<Post> }> = (props) => (
  <div className="">
    <Layout alwaysShowMenu>Hello</Layout>
  </div>
);

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = async () => {
  // TODO: Forenkle API, så vi slipper å gjøre dette over alt
  //const posts = await pipe(getPost(), mapLeft(E.toError))();

  if (isRight(posts)) {
    return {
      props: {
        post: post.right,
      },
    };
  }

  throw new Error(posts.left.message);
};

export default Home;
