import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGetProductsQuery } from '@/utils/api';
import { PUBLIC_ROUTE } from '@/utils/constants';

import { ProductDialog, ProductTable } from './components';

export const WMSPage = () => {
  const products = useGetProductsQuery();

  if (products.isLoading) {
    return <div>Loading...</div>;
  }

  if (!products.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-10">
        <div className="flex items-center space-x-4">
          <Link to={PUBLIC_ROUTE.HOME}>
            <Button size="icon">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Warehouse Management System</h1>
        </div>
        <ProductDialog />
        <Card>
          <ProductTable data={products.data.data} />
        </Card>
      </div>
    </div>
  );
};
