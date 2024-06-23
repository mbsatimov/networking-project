import { Card } from '@/components/ui/card';
import { useGetProductsQuery } from '@/utils/api';

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
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Warehouse Management System</h1>
        <ProductDialog />
        <Card>
          <ProductTable data={products.data.data} />
        </Card>
      </div>
    </div>
  );
};
