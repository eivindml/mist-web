import * as t from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { fromEither, mapLeft, TaskEither } from "fp-ts/lib/TaskEither";

function decodeError(e: t.Errors): Error {
  const missingKeys = e.map((e) => e.context.map(({ key }) => key).join("."));
  return new Error(`Missing keys: ${missingKeys}`);
}

export const decode = <I, A>(Type: t.Decoder<I, A>) => (
  res: I
): TaskEither<Error, A> => {
  return pipe(fromEither(Type.decode(res)), mapLeft(decodeError));
};
