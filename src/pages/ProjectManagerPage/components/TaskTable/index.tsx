import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type TaskTableProps = {
  data: Task[];
};

export const TaskTable: FC<TaskTableProps> = ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Priority</TableHead>
        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((task) => (
        <TableRow key={task.id}>
          <TableCell className="font-medium">{task.id}</TableCell>
          <TableCell>{task.name}</TableCell>
          <TableCell>{task.priority}</TableCell>
          <TableCell>{task.description}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
