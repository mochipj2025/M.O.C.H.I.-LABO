import { createClient } from "next-sanity";

const client = createClient({
  projectId: "mx55qfpe",
  dataset: "production",
  apiVersion: "2024-03-25",
  useCdn: false,
});

async function run() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    category,
    hook,
    publishedAt,
    isGated
  }`);
  console.log(JSON.stringify(posts, null, 2));
}

run();
