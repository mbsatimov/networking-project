import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostEmployeeMutation } from '@/utils/api';

import { EmployeeFormScheme, employeeFormScheme } from '../constants';

export const useEmployeeForm = () => {
  const form = useForm<EmployeeFormScheme>({
    resolver: zodResolver(employeeFormScheme()),
    defaultValues: {
      name: '',
      surname: '',
      phoneNumber: '+998',
      department: '',
    },
  });

  const queryClient = useQueryClient();

  const postEmployeeMutation = usePostEmployeeMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getEmployees'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: EmployeeFormScheme) => {
    postEmployeeMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        surname: data.surname.trim(),
        phoneNumber: data.phoneNumber,
        department: data.department.trim(),
      },
    });
  };

  return {
    state: { loading: postEmployeeMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
