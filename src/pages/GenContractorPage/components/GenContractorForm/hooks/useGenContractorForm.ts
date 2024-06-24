import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostGenContractorMutation } from '@/utils/api';

import { GenContractorFormScheme, genContractorFormScheme } from '../constants';

export const useGenContractorForm = () => {
  const form = useForm<GenContractorFormScheme>({
    resolver: zodResolver(genContractorFormScheme()),
    defaultValues: {
      name: '',
      phoneNumber: '+998',
    },
  });

  const queryClient = useQueryClient();

  const postGenContractorMutation = usePostGenContractorMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getGenContractors'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: GenContractorFormScheme) => {
    postGenContractorMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        phoneNumber: data.phoneNumber,
      },
    });
  };

  return {
    state: { loading: postGenContractorMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
