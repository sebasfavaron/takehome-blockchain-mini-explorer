import type { Metadata } from 'next';
import './globals.css';
import PageLayout from './components/PageLayout';

export const metadata: Metadata = {
  title: 'Mini Explorer',
  description: 'See the main coin prices without the bloat',
  openGraph: {
    title: 'Mini Explorer',
    description: 'See the main coin prices without the bloat',
    images: [
      {
        url: '/snapshot.png',
        width: 1200,
        height: 941,
        alt: 'Mini Explorer - Cryptocurrency price dashboard',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Explorer',
    description: 'See the main coin prices without the bloat',
    images: ['/snapshot.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
