import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

// Primary Brand Typeface: Aspekta (Single Weight 400)
const aspekta = localFont({
  src: [
    {
      path: '../../public/fonts/Aspekta-400.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
});

// Technical Metadata Typeface: Roboto Mono
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'hallelx2 | Precision Biological Computation & Systems Architecture',
  description: 'Operating at the intersection of biological computing, laboratory instrumentation, and architectural intelligence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${aspekta.variable} ${robotoMono.variable}`}>
      <body className="bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] font-sans antialiased selection:bg-[var(--color-bioluminescent-lime)] selection:text-[var(--color-abyssal-ink)]">
        {children}
      </body>
    </html>
  );
}
