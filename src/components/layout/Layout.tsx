import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description, pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
