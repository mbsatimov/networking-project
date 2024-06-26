import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostProjectManagerMutation } from '@/utils/api';

import { ProjectManagerFormScheme, projectManagerFormScheme } from '../constants';

export const useProjectManagerForm = () => {
  const form = useForm<ProjectManagerFormScheme>({
    resolver: zodResolver(projectManagerFormScheme()),
    defaultValues: {
      name: '',
      phoneNumber: '+998',
    },
  });

  const queryClient = useQueryClient();

  const postProjectManagerMutation = usePostProjectManagerMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getProjectManagers'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: ProjectManagerFormScheme) => {
    postProjectManagerMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        phoneNumber: data.phoneNumber,
      },
    });
  };

  return {
    state: { loading: postProjectManagerMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
