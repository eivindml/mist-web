import { IoMdPaper } from "react-icons/io";

export default {
  title: "Post",
  name: "post",
  type: "document",
  icon: IoMdPaper,
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
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Published",
      name: "published",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Article",
      name: "article",
      type: "richText",
    },
  ],
};
