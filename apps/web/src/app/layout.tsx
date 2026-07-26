import type { Metadata } from 'next';
import { Inter_Tight, Roboto_Mono } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aspekta',
  display: 'swap',
});

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
    <html lang="en" className={`${interTight.variable} ${robotoMono.variable}`}>
      <body className="bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] font-sans antialiased selection:bg-[var(--color-bioluminescent-lime)] selection:text-[var(--color-abyssal-ink)]">
        {children}
      </body>
    </html>
  );
};
