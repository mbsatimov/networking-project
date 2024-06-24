import { Link } from 'react-router-dom';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { PRIVATE_ROUTE } from '@/utils/constants';

const links = [
  {
    title: 'Sub-Contractors',
    path: PRIVATE_ROUTE.SUB_CONTRACTORS,
  },
  {
    title: 'Project Managers',
    path: PRIVATE_ROUTE.PROJECT_MANAGERS,
  },
  {
    title: 'Tasks',
    path: PRIVATE_ROUTE.TASKS,
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
          <Card key={link.path}>
            <CardHeader>{link.title}</CardHeader>
            <CardFooter>{link.path}</CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);
