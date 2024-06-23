import { Card } from '@/components/ui/card';
import { useGetCustomersQuery } from '@/utils/api';

import { CustomerDialog, CustomerTable } from './components';

export const SRMPage = () => {
  const customers = useGetCustomersQuery();

  if (customers.isLoading) {
    return <div>Loading...</div>;
  }

  if (!customers.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
        <CustomerDialog />
        <Card>
          <CustomerTable data={customers.data.data} />
        </Card>
      </div>
    </div>
  );
};
