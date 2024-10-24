import Providers from '@/components/ui/theme-provider';
import Header from '@/layout/header';
import type { Metadata } from 'next';
import './globals.css';

// Định nghĩa metadata cho trang
export const metadata: Metadata = {
  title: 'Chinh Portfolio',
  description: 'Welcome to Chinh Portfolio',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          <main className="pt-[70px] pb-[15px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
