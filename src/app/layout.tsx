import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Jan Szczekulski',
    template: '%s | Jan Szczekulski',
  },
  description:
    'Full-Stack SDE and AI researcher. Masters in CSE at UCSD.',
  metadataBase: new URL('https://jan-cs.com'),
  openGraph: {
    title: 'Jan Szczekulski',
    description: 'Full-Stack SDE and AI researcher.',
    url: 'https://jan-cs.com',
    siteName: 'Jan Szczekulski',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg">
        <div className="h-1.5 bg-accent w-full" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
