import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { Layout } from '@/layout';
import { GenContractorPage, LoginPage, MainPage, SubContractorPage, WMSPage } from '@/pages';
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
        path: PRIVATE_ROUTE.GEN_CONTRACTORS,
        element: <GenContractorPage />,
      },
      {
        path: PRIVATE_ROUTE.SUB_CONTRACTORS,
        element: <SubContractorPage />,
      },
      {
        path: PRIVATE_ROUTE.PROJECT_MANAGERS,
        element: <WMSPage />,
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
