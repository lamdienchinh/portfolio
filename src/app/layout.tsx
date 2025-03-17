import Header from '@/components/header';
import Providers from '@/components/ui/theme-provider';
import type { Metadata } from 'next';
import { Lobster } from 'next/font/google';
import './globals.css';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
});

// Định nghĩa metadata cho trang
export const metadata: Metadata = {
  title: 'Chinh',
  description: 'Welcome to Chinh Portfolio',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${lobster.variable} font-sans`}>
        <Providers>
          <Header />
          <main className="pt-[70px] pb-[15px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
