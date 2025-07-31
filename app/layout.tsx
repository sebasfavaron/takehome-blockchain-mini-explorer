import type { Metadata } from 'next';
import './globals.css';
import PageLayout from './components/PageLayout';

export const metadata: Metadata = {
  title: 'Mini Explorer',
  description: 'See the main coin prices without the bloat',
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
