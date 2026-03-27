import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default async function QAIndex() {
  const qas = await client.fetch(`*[_type == "qa"] | order(publishedAt desc) {
    question,
    slug,
    category,
    publishedAt,
    isGated
  }`);

  return (
    <main style={{ minHeight: '100vh', padding: '12rem 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '10rem', borderBottom: '2px solid var(--ink-black)', paddingBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>CONSULTATION_LOG: ANONYMOUS_INQUIRY [ v1.0 ]</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            CLINICAL ADVICE
          </h1>
          <p className="vibe-slogan" style={{ letterSpacing: '0.8em', fontSize: '0.8rem', opacity: 0.8 }}>匿名臨床相談アーカイブ // 守秘義務厳守</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {qas.map((qa: any, index: number) => (
            <Link 
              key={qa.slug.current} 
              href={`/qa/${qa.slug.current}`} 
              style={{ textDecoration: 'none' }}
            >
              <div className="glass" style={{ display: 'flex', flexDirection: 'column', borderLeft: '8px solid var(--ink-black)', paddingLeft: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', opacity: 0.5 }}>
                    CASE_FILE: #{String(index + 1).padStart(3, '0')} // TYPE: {qa.category?.toUpperCase() || 'GENERAL'}
                  </div>
                  {qa.isGated && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#ff0000', fontWeight: 800 }}>
                      [ ENCRYPTED_ADVICE ]
                    </div>
                  )}
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink-black)', marginBottom: '1rem', lineHeight: '1.4' }}>
                  Q: {qa.question.length > 80 ? qa.question.substring(0, 80) + '...' : qa.question}
                </h2>
                
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', color: 'var(--ink-black)', fontWeight: 800, fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
                   {qa.isGated ? "> DECRYPTING_LOG..." : "> ACCESSING_LOG..."} <span style={{ marginLeft: '1rem', fontSize: '1rem' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer style={{ marginTop: '12rem', padding: '4rem 0', borderTop: '1px solid var(--ink-black)', textAlign: 'center' }}>
           <Link href="/" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>[ RETURN_TO_CENTER ]</Link>
        </footer>
      </div>
    </main>
  );
}
