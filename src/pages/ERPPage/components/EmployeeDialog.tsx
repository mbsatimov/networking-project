import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { EmployeeForm } from './EmployeeForm';

export const EmployeeDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Add employee</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <EmployeeForm />
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
