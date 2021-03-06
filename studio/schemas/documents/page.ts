import { IoMdDocument } from "react-icons/io";

export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: IoMdDocument,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      title: "Content",
      name: "content",
      type: "richText",
    },
  ],
};
