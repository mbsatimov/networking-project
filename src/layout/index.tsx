import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Sidebar';

export const Layout = () => (
  <div className="flex">
    <Header />
    <div className="flex-1 pt-20">
      <Outlet />
    </div>
  </div>
);
