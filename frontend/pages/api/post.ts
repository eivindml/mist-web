import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "types";
import { fetch } from "lib/sanity";
import * as t from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { decode } from "lib/decode";
import { chain, of, fold, TaskEither } from "fp-ts/lib/TaskEither";

// TODO: Make stuff more generic, move "getPosts" to seperate folder, getPosts can also be generic, that can take a "transform" function to transform the data, or just use the identity function

/**
 * API route for all Posts
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse<Error | Post>
) => {
  return new Promise(
    pipe(
      getPost(req.body.slug),
      fold(
        (e) => of(res.status(400).end(e.message)),
        (v) => of(res.status(200).json(v))
      )
    )
  );
};

/**
 * Handler for fetching Posts
 */

const postQuery = (
  slug: string
) => `*[_type == "post" && slug.current == ${slug}] {
  _id,
  "slug": slug.current,
  title,
  description,
  published,
  article,
  "poster": poster.asset->,
  "posterAlt": poster.caption,
}[0]`;

export function getPost(slug: string): TaskEither<Error, Post> {
  return pipe(fetch(postQuery(slug)), chain(decode(Post)));
}
