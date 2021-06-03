import { IoMdPerson } from "react-icons/io";

export default {
  // This is the display name for the type
  title: "Subscriber",
  icon: IoMdPerson,

  // The identifier for this document type used in the api's
  name: "subscriber",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "Email",

      // The identifier for this field used in the api's
      name: "email",

      // The type of this field
      type: "string",
    },
    {
      // The display name for this field
      title: "Registration Date",

      // The identifier for this field used in the api's
      name: "date",

      // The type of this field
      type: "datetime",
    },
  ],
};
