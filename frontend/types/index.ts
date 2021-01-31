import * as t from "io-ts";

export const Post = t.intersection([
  t.type({
    _id: t.string,
    title: t.string,
    published: t.string,
    description: t.string,
  }),
  t.partial({
    article: t.UnknownArray,
  }),
]);
export type Post = t.TypeOf<typeof Post>;
