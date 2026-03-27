export default function Home() {
  return (
    <main className="hero-container">
      {/* Technical Metadata Stamps */}
      <div className="technical-stamp" style={{ top: '8rem', left: '4rem' }}>CODE: MOCHI-SLA-001</div>
      <div className="technical-stamp" style={{ top: '8rem', right: '4rem' }}>OBSERVATION: ARTISANAL</div>
      <div className="technical-stamp" style={{ bottom: '4rem', left: '4rem' }}>SEC_LVL: BLUE</div>
      
      <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', maxWidth: '1200px', width: '100%', justifyContent: 'center' }}>
        {/* Vertical Slogan */}
        <div className="writing-vertical" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 900, letterSpacing: '0.45em', padding: '2rem 1rem 2rem 3rem', borderLeft: '1px solid var(--ink-black)' }}>
          身体の深淵。偏執の極北。
        </div>

        {/* Hero Content Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          
          {/* Vertical Branding - Clinical Aesthetic */}
          <div className="vertical-stamp" style={{ position: 'absolute', left: '5%', top: '20%', opacity: 0.6 }}>
            実証に基づいた身体調律
          </div>
          <div className="vertical-stamp" style={{ position: 'absolute', right: '5%', bottom: '20%', opacity: 0.6 }}>
            痛みの本質を解体する。
          </div>

          <div className="hero-text-container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '2rem' }}>
              MOCHI<br />LABO
            </h1>
            <p className="mono" style={{ fontSize: '1.2rem', color: 'var(--ink-black)', opacity: 0.7, marginBottom: '3rem' }}>
              Artisanal Laboratory for Physical Optimization.
            </p>
            
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
              <a href="/blog" className="btn-vibe">
                RESEARCH ARCHIVE [研究録]
              </a>
              <a href="https://line.me" style={{ color: 'var(--ink-black)', textDecoration: 'none', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', borderBottom: '1px solid currentColor' }}>
                JOIN_THE_LAB
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', right: '4rem', opacity: 0.5, fontSize: '0.6rem', fontFamily: 'var(--font-mono)' }}>
        © 2026 MOCHI LABO ALL RIGHTS RESERVED.
      </div>
    </main>
  );
}
