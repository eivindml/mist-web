import * as t from "io-ts";

export const ImageType = t.intersection([
  t.type({
    _id: t.string,
    url: t.string,
  }),
  t.partial({}),
]);
export type ImageType = t.TypeOf<typeof ImageType>;

export const Post = t.intersection([
  t.type({
    _id: t.string,
    slug: t.string,
    title: t.string,
    published: t.string,
    description: t.string,
    poster: ImageType,
  }),
  t.partial({
    article: t.UnknownArray,
  }),
]);
export type Post = t.TypeOf<typeof Post>;
