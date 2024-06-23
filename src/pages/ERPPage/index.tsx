import { Card } from '@/components/ui/card';
import { useGetEmployeesQuery } from '@/utils/api';

import { EmployeeDialog, EmployeeTable } from './components';

export const ERPPage = () => {
  const employee = useGetEmployeesQuery();

  if (employee.isLoading) {
    return <div>Loading...</div>;
  }

  if (!employee.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Enterprise Resource Planning</h1>
        <EmployeeDialog />
        <Card>
          <EmployeeTable data={employee.data.data} />
        </Card>
      </div>
    </div>
  );
};
