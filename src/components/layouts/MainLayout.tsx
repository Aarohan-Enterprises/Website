import { Navbar } from './Navbar';
import { SectionScroller } from '@/components/ui/SectionLink';
import { Footer } from './Footer';
import { FooterSimple } from './FooterSimple';

interface MainLayoutProps {
  children: React.ReactNode;
  simpleFooter?: boolean;
}

export function MainLayout({ children, simpleFooter }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SectionScroller />
      <main className="flex-1">{children}</main>
      {simpleFooter ? <FooterSimple /> : <Footer />}
    </div>
  );
}
