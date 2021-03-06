// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import richText from "./objects/richText";

import page from "./documents/page";
import post from "./documents/post";
import subscriber from "./documents/subscriber";
import websiteConfig from "./documents/websiteConfig";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "mySchema",

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([richText, websiteConfig, page, post, subscriber]),
});
