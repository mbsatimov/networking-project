import { Card } from '@/components/ui/card';
import { useGetSubContractorsQuery } from '@/utils/api';

import { SubContractorDialog, SubContractorTable } from './components';

export const GenContractorPage = () => {
  const subContractors = useGetSubContractorsQuery();

  if (subContractors.isLoading) {
    return <div>Loading...</div>;
  }

  if (!subContractors.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Sub-Contractors</h1>
        <SubContractorDialog />
        <Card>
          <SubContractorTable data={subContractors.data.data} />
        </Card>
      </div>
    </div>
  );
};
