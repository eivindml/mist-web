import { createClient } from "next-sanity";
import { parse } from "groq-js";
import * as E from "fp-ts/lib/Either";
import { tryCatch, TaskEither } from "fp-ts/lib/TaskEither";

export const client = createClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
});

export function fetch(query: string): TaskEither<Error, unknown> {
  return tryCatch(
    () =>
      client.fetch(query).then((res) => {
        if (!res) {
          try {
            parse(query);
            throw new Error("Syntax lookes correct. But check query. \n\n${u}");
          } catch (e) {
            const queryWithErrorPosition =
              query.slice(0, e.position) + "🧨" + query.slice(e.position);
            throw new Error(
              `Query syntax error. ${e}\n\n${queryWithErrorPosition}`
            );
          }
        }
        return res;
      }),
    E.toError
  );
}
