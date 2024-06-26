import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostTaskMutation } from '@/utils/api';

import { TaskFormScheme, taskFormScheme } from '../constants';

export const useTaskForm = () => {
  const form = useForm<TaskFormScheme>({
    resolver: zodResolver(taskFormScheme()),
    defaultValues: {
      name: '',
      description: '',
      priority: '',
    },
  });

  const queryClient = useQueryClient();

  const postTaskMutation = usePostTaskMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getTasks'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: TaskFormScheme) => {
    postTaskMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        priority: Number(data.priority),
        description: data.description || null,
      },
    });
  };

  return {
    state: { loading: postTaskMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
