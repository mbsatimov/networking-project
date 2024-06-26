import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { usePostLoginMutation } from '@/utils/api';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';

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

  const navigate = useNavigate();

  const postLoginMutation = usePostLoginMutation({
    options: {
      onSuccess: (data) => {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, data.data.token);
        navigate('/');
        queryClient.invalidateQueries({
          queryKey: ['me'],
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
