import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGetEmployeesQuery } from '@/utils/api';
import { PUBLIC_ROUTE } from '@/utils/constants';

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
      <div className="container space-y-10">
        <div className="flex items-center space-x-4">
          <Link to={PUBLIC_ROUTE.HOME}>
            <Button size="icon">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Enterprise Resource Planning</h1>
        </div>
        <EmployeeDialog />
        <Card>
          <EmployeeTable data={employee.data.data} />
        </Card>
      </div>
    </div>
  );
};
