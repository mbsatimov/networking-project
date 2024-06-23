import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Layout from '@/Layout';
import { ERPPage, MainPage, SRMPage, WMSPage } from '@/pages';
import { PUBLIC_ROUTE } from '@/utils/constants';

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTE.HOME,
    errorElement: <Navigate to={PUBLIC_ROUTE.HOME} />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: PUBLIC_ROUTE.WMS,
        element: <WMSPage />,
      },
      {
        path: PUBLIC_ROUTE.ERP,
        element: <ERPPage />,
      },
      {
        path: PUBLIC_ROUTE.CRM,
        element: <SRMPage />,
      },
      {
        path: '*',
        element: <Navigate to={PUBLIC_ROUTE.HOME} />,
      },
    ],
  },
];
