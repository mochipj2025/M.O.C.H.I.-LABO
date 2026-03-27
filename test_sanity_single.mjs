import { createClient } from "next-sanity";

const client = createClient({
  projectId: "mx55qfpe",
  dataset: "production",
  apiVersion: "2024-03-25",
  useCdn: false,
});

async function run() {
  const posts = await client.fetch(`*[_id == "4d611d66-e61c-4c9a-becb-336cc35a5a60"]`);
  console.log(JSON.stringify(posts, null, 2));
}

run();
