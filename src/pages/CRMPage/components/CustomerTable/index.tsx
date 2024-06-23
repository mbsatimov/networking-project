import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type CustomerTableProps = {
  data: Customer[];
};

export const CustomerTable: FC<CustomerTableProps> = ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>First name</TableHead>
        <TableHead>Last name</TableHead>
        <TableHead className="text-right">Phone</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((customer) => (
        <TableRow key={customer.id}>
          <TableCell className="font-medium">{customer.id}</TableCell>
          <TableCell>{customer.name}</TableCell>
          <TableCell>{customer.surname}</TableCell>
          <TableCell className="text-right">{customer.phoneNumber}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
