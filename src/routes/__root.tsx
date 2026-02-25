import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import BottomNav from '../components/layout/BottomNav';
import MiniPlayer from '../components/layout/MiniPlayer';
import TopBar from '../components/layout/TopBar';
import Sidebar from '../components/layout/Sidebar';
import RightPanel from '../components/layout/RightPanel';
import Footer from '../components/layout/Footer';

const HIDDEN_NAV_ROUTES = ['/player', '/auth/signin', '/auth/signup', '/auth/forgot-password'];

function RootLayout() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const hideNav = HIDDEN_NAV_ROUTES.some((r) => pathname.startsWith(r));

  return (
    <div className="min-h-screen bg-[#060d19] text-white">
      {/* Desktop layout: TopBar + Sidebar + RightPanel (lg+) */}
      {!hideNav && (
        <div className="hidden lg:block">
          <TopBar />
          <Sidebar />
          <RightPanel />
        </div>
      )}

      {/* Main content */}
      <main
        className={[
          !hideNav ? 'lg:pl-64 lg:pr-60 lg:pt-16' : '',
          !hideNav ? 'pb-32 lg:pb-0' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Outlet />
        {/* Footer — desktop only */}
        {!hideNav && (
          <div className="hidden lg:block">
            <Footer />
          </div>
        )}
      </main>

      {/* Mobile nav: BottomNav + MiniPlayer (< lg) */}
      {!hideNav && (
        <div className="lg:hidden">
          <MiniPlayer />
          <BottomNav />
        </div>
      )}
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
