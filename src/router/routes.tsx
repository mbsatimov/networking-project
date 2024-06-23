import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { MainPage } from '@/pages';
import { PUBLIC_ROUTE } from '@/utils/constants';

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTE.HOME,
    errorElement: <Navigate to={PUBLIC_ROUTE.HOME} />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '*',
        element: <Navigate to={PUBLIC_ROUTE.HOME} />,
      },
    ],
  },
];
