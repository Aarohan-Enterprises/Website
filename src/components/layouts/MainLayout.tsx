import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Every page is one drawing sheet on drafting-paper: a bordered column with the nav on top.
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bp-grid min-h-screen p-2 sm:p-4 lg:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-1rem)] max-w-[1240px] flex-col border-2 border-ink bg-paper">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
