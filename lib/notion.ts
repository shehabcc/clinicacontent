import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getCMSContent() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID");
  }

  const response = await (notion.databases as any).query({
    database_id: databaseId,
  });

  return response.results.map((page: any) => {
    const section = page?.properties?.Section?.select?.name ?? "";
    const title = page?.properties?.Title?.title?.[0]?.text?.content ?? "";
    const description =
      page?.properties?.Description?.rich_text?.[0]?.text?.content ?? "";
    const price = page?.properties?.Price?.rich_text?.[0]?.text?.content ?? "";
    const order = page?.properties?.Order?.number ?? 0;

    return { section, title, description, price, order };
  });
}

export default notion;
