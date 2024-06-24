import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Layout } from '@/layout';
import { MainPage, WMSPage } from '@/pages';
import { LoginPage } from '@/pages/LoginPage';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/utils/constants';

export const privateRoutes: RouteObject[] = [
  {
    path: PRIVATE_ROUTE.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: PRIVATE_ROUTE.SUB_CONTRACTORS,
        element: <WMSPage />,
      },
      {
        path: PRIVATE_ROUTE.PROJECT_MANAGERS,
        element: <WMSPage />,
      },
      {
        path: PRIVATE_ROUTE.TASKS,
        element: <WMSPage />,
      },
      {
        path: '*',
        element: <Navigate to={PRIVATE_ROUTE.HOME} />,
      },
    ],
  },
];

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTE.LOGIN,
    element: <LoginPage />,
    children: [
      {
        path: '*',
        element: <Navigate to={PUBLIC_ROUTE.LOGIN} />,
      },
    ],
  },
];
