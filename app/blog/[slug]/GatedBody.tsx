'use client';

import { useState } from 'react';
import { PortableText } from '@portabletext/react';

interface GatedBodyProps {
  body: any;
  ethos: any;
  isGated: boolean;
  correctPassword?: string;
}

export default function GatedBody({ body, ethos, isGated, correctPassword }: GatedBodyProps) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // 閲覧制限がない場合はそのまま表示
  if (!isGated) {
    return (
      <>
        <section className="blog-body" style={{ marginBottom: '12rem', color: 'var(--ink-black)' }}>
          <PortableText value={body} />
        </section>
        {ethos && (
          <section style={{ padding: '8rem 0', marginBottom: '10rem', borderTop: '4px solid var(--ink-black)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '4rem', fontSize: '2.8rem', letterSpacing: '-0.02em' }}>
              ETHOS / 視座の証明
            </h3>
            <div style={{ fontSize: '1.25rem', color: 'var(--ink-black)', lineHeight: '2.2' }}>
              <PortableText value={ethos} />
            </div>
          </section>
        )}
      </>
    );
  }

  // 解読済みの表示
  if (isUnlocked) {
    return (
      <>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#00ff00', marginBottom: '2rem' }}>
          [ ACCESS_GRANTED: CONTENTS_DECRYPTED ]
        </div>
        <section className="blog-body" style={{ marginBottom: '12rem', color: 'var(--ink-black)' }}>
          <PortableText value={body} />
        </section>
        {ethos && (
          <section style={{ padding: '8rem 0', marginBottom: '10rem', borderTop: '4px solid var(--ink-black)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 900, color: 'var(--ink-black)', marginBottom: '4rem', fontSize: '2.8rem', letterSpacing: '-0.02em' }}>
              ETHOS / 視座の証明
            </h3>
            <div style={{ fontSize: '1.25rem', color: 'var(--ink-black)', lineHeight: '2.2' }}>
              <PortableText value={ethos} />
            </div>
          </section>
        )}
      </>
    );
  }

  // ロック解除フォーム
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ 
      margin: '4rem 0 12rem', 
      padding: '8rem 4rem', 
      background: '#f8f8f8', 
      border: '2px dashed var(--ink-black)',
      textAlign: 'center'
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '2rem', opacity: 0.6 }}>
        CONFIDENTIAL: ENCRYPTED_ARCHIVE_DATA
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 900, marginBottom: '4rem' }}>
        解読コードを入力してください
      </h2>
      <p style={{ fontSize: '1rem', marginBottom: '4rem', opacity: 0.7 }}>
        この記事は note 購入者限定の特典記事です。<br />
        有料部分に記載されている「秘密のキーワード」を入力してください。
      </p>
      
      <form onSubmit={handleUnlock} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="ENTER_KEYWORD"
          style={{
            width: '100%',
            padding: '1.5rem',
            border: '1px solid var(--ink-black)',
            background: 'transparent',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '2rem',
            outline: 'none'
          }}
        />
        <button 
          type="submit" 
          className="btn-vibe"
          style={{ width: '100%', cursor: 'pointer' }}
        >
          DECRYPT ARCHIVE
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '2rem', color: '#ff0000', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
          [ ERROR: INVALID_ACCESS_KEY ]
        </div>
      )}
    </div>
  );
}
