import { client } from "@/sanity/lib/client";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogIndex() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    category,
    hook,
    publishedAt,
    isGated
  }`, {}, { cache: 'no-store' });

  return (
    <main style={{ minHeight: '100vh', padding: '12rem 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '10rem', borderBottom: '2px solid var(--ink-black)', paddingBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>CATEGORY: RESEARCH_LOGS [ v4.0 ]</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            ARCHIVE ENTRIES
          </h1>
          <p className="vibe-slogan" style={{ letterSpacing: '0.8em', fontSize: '0.8rem', opacity: 0.8 }}>身体と精神の標本記録</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '4rem' }}>
          {posts.map((post: any, index: number) => (
            <Link 
              key={post.slug.current} 
              href={`/blog/${post.slug.current}`} 
              style={{ textDecoration: 'none' }}
            >
              <div className="glass" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', opacity: 0.5 }}>
                    RECORD ID: #{String(index + 1).padStart(3, '0')} // CLASS: {post.category || 'ARTISANAL'}
                  </div>
                  {post.isGated && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#ff0000', fontWeight: 800 }}>
                      [ RESTRICTED_ACCESS ]
                    </div>
                  )}
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--ink-black)', marginBottom: '2rem', lineHeight: '1.3' }}>{post.title}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', flexGrow: 1, lineHeight: '1.8' }}>{post.hook}</p>
                
                <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', color: 'var(--ink-black)', fontWeight: 800, fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                   {post.isGated ? "> DECRYPTING..." : "> ACCESSING_ANALYSIS..."} <span style={{ marginLeft: '1rem', fontSize: '1.2rem' }}>→</span>
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
