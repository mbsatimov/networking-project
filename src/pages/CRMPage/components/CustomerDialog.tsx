import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { CustomerForm } from './CustomerForm';

export const CustomerDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="icon">
        <Plus />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <CustomerForm />
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
