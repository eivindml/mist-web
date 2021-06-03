// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { IoMdSettings } from "react-icons/io";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(IoMdSettings)
        .child(
          S.document().schemaType("websiteConfig").documentId("websiteConfig")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["websiteConfig"].includes(listItem.getId())
      ),
    ]);
