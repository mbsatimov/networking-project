import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostLoginMutation } from '@/utils/api';

import { LoginFormScheme, loginFormScheme } from '../constants';

export const useLoginForm = () => {
  const form = useForm<LoginFormScheme>({
    resolver: zodResolver(loginFormScheme()),
    defaultValues: {
      phoneNumber: '+998',
      password: '',
    },
  });

  const queryClient = useQueryClient();

  const postLoginMutation = usePostLoginMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getUser'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: LoginFormScheme) => {
    postLoginMutation.mutateAsync({
      params: {
        phoneNumber: data.phoneNumber,
        password: data.password,
      },
    });
  };

  return {
    state: { loading: postLoginMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
