import { Link } from 'react-router-dom';

import { Card, CardHeader } from '@/components/ui/card';
import { PUBLIC_ROUTE } from '@/utils/constants';

const links = [
  {
    title: 'Warehouse Management System',
    path: PUBLIC_ROUTE.WMS,
  },
  {
    title: 'Enterprise Resource Planning',
    path: PUBLIC_ROUTE.ERP,
  },
  {
    title: 'Customer Relationship Management',
    path: PUBLIC_ROUTE.CRM,
  },
];

export const MainPage = () => (
  <div>
    <div className="container flex flex-wrap gap-4">
      {links.map((link) => (
        <Link
          to={link.path}
          className="block w-full max-w-[400px]"
        >
          <Card
            key={link.path}
            className=""
          >
            <CardHeader>{link.title}</CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);
