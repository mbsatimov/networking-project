import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type SubContractorTableProps = {
  data: SubContractor[];
};

export const SubContractorTable: FC<SubContractorTableProps> = ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead className="text-right">Phone</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((subContractor) => (
        <TableRow key={subContractor.id}>
          <TableCell className="font-medium">{subContractor.id}</TableCell>
          <TableCell>{subContractor.name}</TableCell>
          <TableCell className="text-right">{subContractor.phoneNumber}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
