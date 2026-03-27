import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import GatedBody from "@/app/blog/[slug]/GatedBody"; // ブログで作成したゲートコンポーネントを再利用

export default async function QADetail({ params }: { params: { slug: string } }) {
  const qa = await client.fetch(`*[_type == "qa" && slug.current == $slug][0] {
    question,
    answer,
    category,
    isGated,
    password,
    publishedAt
  }`, { slug: (await params).slug });

  if (!qa) return notFound();

  return (
    <main style={{ minHeight: '100vh', padding: '14rem 2rem 8rem' }}>
      <article style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '8rem', borderLeft: '8px solid var(--ink-black)', paddingLeft: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginBottom: '2rem', opacity: 0.5 }}>
             CONFIDENTIAL_CONSULTATION // CASE_STATUS: ARCHIVED
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--ink-black)', lineHeight: '1.3', marginBottom: '4rem' }}>
            Q: {qa.question}
          </h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.5rem 1rem', border: '1px solid var(--ink-black)', display: 'inline-block' }}>
            PROTOCOL: ANONYMITY_ASSURED
          </div>
        </header>

        <GatedBody 
          body={qa.answer} 
          ethos={null} // Q&AにはEthosセクションはなし
          isGated={qa.isGated} 
          correctPassword={qa.password} 
        />

        <footer style={{ marginTop: '12rem', borderTop: '1px solid var(--ink-black)', paddingTop: '6rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
             <Link href="/qa" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>[ CONSULTATION_INDEX ]</Link>
             <Link href="/" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>[ HOME_FRONT ]</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
