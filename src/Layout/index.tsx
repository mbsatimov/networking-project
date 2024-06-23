import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Sidebar';

const Layout = () => (
  <div className="flex">
    <Header />
    <div className="flex-1 py-6">
      <Outlet />
    </div>
  </div>
);

export default Layout;
