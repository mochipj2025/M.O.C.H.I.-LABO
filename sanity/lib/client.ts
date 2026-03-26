import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mx55qfpe",
  dataset: "production",
  apiVersion: "2024-03-25",
  useCdn: false, // 本番時はtrue、開発時は最新を取るためfalse
});
