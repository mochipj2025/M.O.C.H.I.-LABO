import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import GatedBody from "./GatedBody";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    hook,
    body,
    ethos,
    ctaText,
    publishedAt,
    category,
    isGated,
    password
  }`, { slug: (await params).slug });

  if (!post) return notFound();

  return (
    <main style={{ minHeight: '100vh', padding: '14rem 2rem 8rem' }}>
      <article style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '8rem', textAlign: 'left', borderLeft: '8px solid var(--ink-black)', paddingLeft: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            ENTRY_TYPE: CASE_STUDY // SUBJECT_ID: {(post.slug?.current || '').toUpperCase()}
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: 'var(--ink-black)', lineHeight: '1.2', marginBottom: '5rem', letterSpacing: '-0.04em' }}>
            {post.title}
          </h1>
          
          <div style={{ maxWidth: '750px', padding: '4rem', background: '#fff', border: '1px solid var(--ink-black)', boxShadow: '8px 8px 0 rgba(0,0,0,0.05)' }}>
            <p style={{ color: 'var(--ink-black)', fontSize: '1.4rem', lineHeight: '2.2', opacity: 0.9, fontWeight: 700 }}>
              {post.hook}
            </p>
          </div>
        </header>

        <GatedBody 
          body={post.body} 
          ethos={post.ethos} 
          isGated={post.isGated} 
          correctPassword={post.password} 
        />

        <div style={{ textAlign: 'center', padding: '10rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginBottom: '3rem', opacity: 0.5 }}>AUTHOR_ACCESS_ONLY: MEMBERSHIP_REQUIRED</div>
          <a href="#" className="btn-vibe" style={{ padding: '2rem 8rem', fontSize: '1.2rem' }}>
            {post.ctaText || 'DECRYPT MEMBERSHIP →'}
          </a>
        </div>

        <footer style={{ marginTop: '12rem', borderTop: '1px solid var(--ink-black)', paddingTop: '6rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}>
             <Link href="/blog" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>[ ARCHIVE_INDEX ]</Link>
             <Link href="/" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>[ HOME_FRONT ]</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
