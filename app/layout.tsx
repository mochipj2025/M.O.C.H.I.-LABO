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
        {children}
      </body>
    </html>
  );
}
