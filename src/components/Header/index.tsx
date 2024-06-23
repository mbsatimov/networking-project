import { useLocation } from 'react-router-dom';

import { siteTabs } from '@/config/site';

import { MenuItem } from './MenuItem';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex h-[80px] items-center border-b">
      <div className="container">
        <ul className="flex justify-center space-x-4">
          {siteTabs.map((tab) => (
            <li key={tab.path}>
              <MenuItem
                isActive={pathname === tab.path}
                link={tab.path}
                title={tab.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
