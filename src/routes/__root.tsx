import { Link, Outlet, createRootRoute, useRouterState } from '@tanstack/react-router';
import BottomNav from '../components/layout/BottomNav';
import MiniPlayer from '../components/layout/MiniPlayer';
import TopBar from '../components/layout/TopBar';
import Sidebar from '../components/layout/Sidebar';
import RightPanel from '../components/layout/RightPanel';
import Footer from '../components/layout/Footer';
import DesktopPlayer from '../components/layout/DesktopPlayer';

const HIDDEN_NAV_ROUTES = ['/player', '/auth/signin', '/auth/signup', '/auth/forgot-password'];

function RootLayout() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const hideNav = HIDDEN_NAV_ROUTES.some((r) => pathname.startsWith(r));

  if (hideNav) {
    return (
      <div className="min-h-screen bg-[#060d19] text-white">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="bg-[#060d19] text-white">
      {/* TopBar — fixed at top, desktop only */}
      <div className="hidden lg:block">
        <TopBar />
      </div>

      {/* 3-column area: Sidebar | main | RightPanel — pt-16 clears fixed TopBar */}
      <div className="lg:flex lg:pt-16">
        {/* Sidebar — sticky, desktop only */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main content — shared mobile + desktop */}
        <main className="flex-1 min-w-0 pb-32 lg:pb-[72px]">
          <Outlet />
        </main>

        {/* RightPanel — sticky, desktop only */}
        <div className="hidden lg:block">
          <RightPanel />
        </div>
      </div>

      {/* Footer — outside 3-column area, spans true full width (desktop only) */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Desktop player bar — fixed at bottom (desktop only) */}
      <div className="hidden lg:block">
        <DesktopPlayer />
      </div>

      {/* Mobile nav — fixed at bottom */}
      <div className="lg:hidden">
        <MiniPlayer />
        <BottomNav />
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="text-white/70">Сторінку не знайдено</p>
      <Link
        to="/"
        className="rounded-full bg-[#0A84FF] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
      >
        Повернутися на головну
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
