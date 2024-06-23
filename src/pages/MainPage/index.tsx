import { Link } from 'react-router-dom';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { PUBLIC_ROUTE } from '@/utils/constants';

const links = [
  {
    title: 'WMS',
    path: PUBLIC_ROUTE.WMS,
  },
  {
    title: 'ERP',
    path: PUBLIC_ROUTE.ERP,
  },
  {
    title: 'CRM',
    path: PUBLIC_ROUTE.CRM,
  },
];

export const MainPage = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="space-y-4">
      {links.map((link) => (
        <Card
          key={link.path}
          className="w-80"
        >
          <CardHeader>{link.title}</CardHeader>
          <CardFooter>
            <Link to={link.path}>{link.path}</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);
