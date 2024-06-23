import { useLocation } from 'react-router-dom';

import { siteTabs } from '@/config/site';

import { MenuItem } from './MenuItem';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="h-screen w-[300px] border-r bg-primary/20 p-10 text-primary-foreground">
      <ul className="space-y-8 text-2xl">
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
    </header>
  );
};
