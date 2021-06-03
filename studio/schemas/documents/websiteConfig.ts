import { IoMdSettings } from "react-icons/io";

export default {
  title: "Website Config",
  name: "websiteConfig",
  type: "document",
  icon: IoMdSettings,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      title: "Header Menu",
      name: "headerMenu",
      type: "array",
      of: [
        {
          title: "Internal",
          name: "internal",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Reference",
              name: "reference",
              type: "reference",
              to: [{ type: "page" }],
            },
          ],
        },
        {
          title: "External",
          name: "external",
          type: "object",
          fields: [
            {
              title: "URL",
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      title: "Footer Menu",
      name: "footerMenu",
      type: "array",
      of: [
        {
          title: "Internal",
          name: "internal",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Reference",
              name: "reference",
              type: "reference",
              to: [{ type: "page" }],
            },
          ],
        },
        {
          title: "External",
          name: "external",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "URL",
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
