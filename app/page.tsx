export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="sanctuary-bg" />
      
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <p className="backronym" style={{ marginBottom: '1rem' }}>
          Mental & Ontological Clinical Holistic Insight
        </p>
        
        <h1 className="hero-text" style={{ marginBottom: '2rem' }}>
          M.O.C.H.I. LABO
        </h1>
        
        <div className="glass" style={{ padding: '3rem', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#f1f5f9' }}>
            「その手に、真実の愛はあるか？」<br />
            15年の臨床と科学が交差する、セラピストのための「聖域」。
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#" 
              style={{ 
                background: '#f1f5f9', 
                color: '#0f172a', 
                padding: '0.8rem 2rem', 
                borderRadius: '99px',
                fontWeight: '600',
              }}
            >
              秘密結社（LINE）に入る
            </a>
            <a 
              href="/studio" 
              style={{ 
                border: '1px solid #94a3b8', 
                color: '#f1f5f9', 
                padding: '0.8rem 2rem', 
                borderRadius: '99px',
                fontWeight: '600'
              }}
            >
              研究室（Studio）へ
            </a>
          </div>
        </div>
        
        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          © 2026 M.O.C.H.I. LABO - Exploring the depth of human soul
        </p>
      </div>
    </main>
  );
}
