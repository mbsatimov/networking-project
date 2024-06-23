import { FC } from 'react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  isActive: boolean;
  link: string;
  title: string;
};

export const MenuItem: FC<MenuItemProps> = ({ isActive, link, title }) => (
  <Link
    to={link}
    className={isActive ? 'text-primary' : 'text-muted-foreground'}
  >
    {title}
  </Link>
);
