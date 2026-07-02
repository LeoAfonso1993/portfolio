import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leo Afonso – Full-Stack Developer',
  description:
    'Full-stack developer with 3+ years of agency experience building platforms for enterprise clients. Specializing in Drupal, React, PHP, and modern web architecture.',
  openGraph: {
    title: 'Leo Afonso – Full-Stack Developer',
    description:
      'Full-stack developer with 3+ years of agency experience. Currently exploring remote opportunities.',
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
      <body>{children}</body>
    </html>
  );
}
