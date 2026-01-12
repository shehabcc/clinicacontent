import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getCMSContent() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID");
  }

  const response = await (notion.databases as any).query({
    database_id: databaseId,
  });

  return response.results.map((page: any) => {
    return {
      section: page.properties.Section.select.name,
      title: page.properties.Title.title[0]?.text.content || "",
      description:
        page.properties.Description.rich_text[0]?.text.content || "",
      price: page.properties.Price.rich_text[0]?.text.content || "",
      order: page.properties.Order.number || 0,
    };
  });
}
