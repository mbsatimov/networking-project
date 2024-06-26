import { Card } from '@/components/ui/card';
import { useGetProjectManagersQuery } from '@/utils/api';

import { ProjectManagerDialog, ProjectManagerTable } from './components';

export const SubContractorPage = () => {
  const projectManagers = useGetProjectManagersQuery();

  if (projectManagers.isLoading) {
    return <div>Loading...</div>;
  }

  if (!projectManagers.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Project Managers</h1>
        <ProjectManagerDialog />
        <Card>
          <ProjectManagerTable data={projectManagers.data.data} />
        </Card>
      </div>
    </div>
  );
};
