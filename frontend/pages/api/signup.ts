import type { NextApiRequest, NextApiResponse } from "next";
import sanity from "lib/sanity";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email) {
      res.status(400).end("`email` is missing from body.");
    }

    const doc = {
      _type: "subscriber",
      email: email,
      date: new Date(),
    };

    const query = `*[_type == "subscriber" && email == "${email}"]{_id, email}`;
    const emails = await sanity.fetch(query);

    if (emails.length > 0) {
      /** 409 Resource conflict */
      res
        .status(409)
        .end(JSON.stringify({ message: `${email} already exists.` }));
    } else {
      /** 201 Created */
      await sanity.create(doc);
      res.status(201).end(
        JSON.stringify({
          email: email,
          message: `${email} successfully signed up.`,
        })
      );
    }

    res.end(JSON.stringify(emails));
  } else {
    // Handle any other HTTP method
    res.status(400).end("Only POST is supported.");
  }
}
