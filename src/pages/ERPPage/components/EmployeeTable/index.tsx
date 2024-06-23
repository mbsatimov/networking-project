import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type EmployeeTableProps = {
  data: Employee[];
};

export const EmployeeTable: FC<EmployeeTableProps> = ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>First name</TableHead>
        <TableHead>Last name</TableHead>
        <TableHead>Department</TableHead>
        <TableHead className="text-right">Phone</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((employee) => (
        <TableRow key={employee.id}>
          <TableCell className="font-medium">{employee.id}</TableCell>
          <TableCell>{employee.name}</TableCell>
          <TableCell>{employee.surname}</TableCell>
          <TableCell>{employee.department}</TableCell>
          <TableCell className="text-right">{employee.phoneNumber}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
