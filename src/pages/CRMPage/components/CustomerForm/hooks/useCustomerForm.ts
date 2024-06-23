import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostCustomerMutation } from '@/utils/api';

import { CustomerFormScheme, customerFormScheme } from '../constants';

export const useCustomerForm = () => {
  const form = useForm<CustomerFormScheme>({
    resolver: zodResolver(customerFormScheme()),
    defaultValues: {
      name: '',
      surname: '',
      phoneNumber: '+998',
    },
  });

  const queryClient = useQueryClient();

  const postCustomerMutation = usePostCustomerMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getCustomers'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: CustomerFormScheme) => {
    postCustomerMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        surname: data.surname.trim(),
        phoneNumber: data.phoneNumber,
      },
    });
  };

  return {
    state: { loading: postCustomerMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
