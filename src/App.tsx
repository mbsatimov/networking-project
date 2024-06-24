import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './router';
import { LOCAL_STORAGE_KEY } from './utils/constants';

const queryClient = new QueryClient();

const publicRouter = createBrowserRouter(publicRoutes);
const privateRouter = createBrowserRouter(privateRoutes);

const App = () => {
  const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN);
  const router = isLoggedIn ? privateRouter : publicRouter;

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
