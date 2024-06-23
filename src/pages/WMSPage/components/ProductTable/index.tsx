import { FC } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type ProductTableProps = {
  data: Product[];
};

export const ProductTable: FC<ProductTableProps> = ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="text-right">Quantity</TableHead>
        <TableHead className="text-right">Price</TableHead>
        <TableHead className="text-right">Phone</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((product) => (
        <TableRow key={product.id}>
          <TableCell className="font-medium">{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.description}</TableCell>
          <TableCell className="text-right">{product.quantity}</TableCell>
          <TableCell className="text-right">{product.price}</TableCell>
          <TableCell className="text-right">{product.phoneNumber}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
