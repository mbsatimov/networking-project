import { Card } from '@/components/ui/card';
import { useGetTasksQuery } from '@/utils/api';

import { TaskDialog, TaskTable } from './components';

export const ProjectManagerPage = () => {
  const tasks = useGetTasksQuery();

  if (tasks.isLoading) {
    return <div>Loading...</div>;
  }

  if (!tasks.isSuccess) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-6">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <TaskDialog />
        <Card>
          <TaskTable data={tasks.data.data} />
        </Card>
      </div>
    </div>
  );
};
