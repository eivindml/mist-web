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
    <Layout alwaysShowMenu>
      <div className="grid gap-16 max-w-screen-lg mx-auto mt-32">
        {props.posts.map((post) => (
          <div className="flex space-x-8 items-center" key={post._id}>
            <Image
              className="rounded-xl"
              src={post.poster.url}
              width={300}
              height={240}
            />
            <div>
              <h2 className="text-2xl font-bold mb-1">{post.title}</h2>
              <p className="text-xs mb-4 text-transparent-gray">
                {formatDistance(new Date(post.published), new Date())} ago
              </p>
              <p className="mb-4">{post.description}</p>
              <Link href={`/text/${post.slug}`}>
                <a className="font-semibold">Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

export const getStaticProps: GetStaticProps<{
  posts: Array<Post>;
}> = async () => {
  // TODO: Forenkle API, så vi slipper å gjøre dette over alt
  const posts = await pipe(getPosts(), mapLeft(E.toError))();

  if (isRight(posts)) {
    return {
      props: {
        posts: posts.right,
      },
    };
  }

  throw new Error(posts.left.message);
};

export default Home;
