import type {Metadata} from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';

export const metadata: Metadata = {
  title: 'WPX OS',
  description: 'An all-in-one productivity and intelligence OS.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex">
        <Sidebar />
        <main className="flex-1 pl-16">
          {children}
        </main>
      </body>
    </html>
  );
}
