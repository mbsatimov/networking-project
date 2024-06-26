import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostSubContractorMutation } from '@/utils/api';

import { SubContractorFormScheme, subContractorFormScheme } from '../constants';

export const useSubContractorForm = () => {
  const form = useForm<SubContractorFormScheme>({
    resolver: zodResolver(subContractorFormScheme()),
    defaultValues: {
      name: '',
      phoneNumber: '+998',
    },
  });

  const queryClient = useQueryClient();

  const postSubContractorMutation = usePostSubContractorMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getSubContractors'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: SubContractorFormScheme) => {
    postSubContractorMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        phoneNumber: data.phoneNumber,
      },
    });
  };

  return {
    state: { loading: postSubContractorMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
