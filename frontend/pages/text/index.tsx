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

interface TextsPageProps {
  posts: Array<Post>;
  websiteConfig: {
    footerMenu: Array<any>;
    headerMeny: Array<any>;
  }; // TODO: Type array
}

const Home: NextPage<TextsPageProps> = (props) => (
  <div className="">
    <Layout alwaysShowMenu footerMenu={props.websiteConfig.footerMenu}>
      <div className="grid gap-24 max-w-screen-sm mx-auto">
        {props.posts.map((post) => (
          <div
            className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16 items-center justify-center"
            key={post._id}
          >
            <div className="relative w-full h-48">
              <Image
                className="rounded-xl object-cover"
                src={post.poster.url}
                layout="fill"
              />
            </div>
            <div className="w-7/12 flex-shrink-0 flex-grow-0">
              <h2 className="font-extrabold text-4xl font-bold mb-4 text-center sm:text-left">
                {post.title}
              </h2>
              <p className="mb-8 text-center sm:text-left hyphens-auto">
                {post.description}
              </p>
              <Link href={`/text/${post.slug}`}>
                <a className="font-semibold block text-center sm:text-left">
                  Read article →
                </a>
              </Link>
              <p className="text-xs mt-1 text-transparent-gray text-center sm:text-left">
                {formatDistance(new Date(post.published), new Date())} ago
              </p>
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

  const websiteConfig = await client.fetch(`*[_id == "websiteConfig"]{
    ...,
      _id,
      _key,
      "footerMenu": footerMenu[] {
        title,
        _key,
        _type,
        "slug": reference->slug.current,
        url
      }
    
  }[0]`);

  if (isRight(posts)) {
    return {
      props: {
        posts: posts.right,
        websiteConfig,
      },
    };
  }

  throw new Error(posts.left.message);
};

export default Home;
