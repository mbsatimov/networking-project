import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { publicRoutes } from './router';

const queryClient = new QueryClient();

const publicRouter = createBrowserRouter(publicRoutes);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={publicRouter} />
  </QueryClientProvider>
);

export default App;
