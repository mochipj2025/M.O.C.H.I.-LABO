import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M.O.C.H.I. LABO | Mental & Ontological Clinical Holistic Insight",
  description: "15年の臨床と科学が交差する、セラピストのための「聖域」。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <nav className="nav-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logo.png" alt="MOCHI LABO" style={{ height: '36px', width: 'auto' }} />
          </div>
          <div className="nav-links">
            <a href="/">表紙 <small>[FRONT]</small></a>
            <a href="/blog">研究録 <small>[ARCHIVE]</small></a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
