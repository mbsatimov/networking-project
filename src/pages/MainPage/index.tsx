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
  <div>
    <div className="container flex flex-col items-center gap-4 space-y-4">
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
            <CardFooter>{link.path}</CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);
