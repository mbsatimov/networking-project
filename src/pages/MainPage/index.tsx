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
  <div className="h-full">
    <div className="container py-6">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4">
        {links.map((link) => (
          <Link to={link.path}>
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
  </div>
);
