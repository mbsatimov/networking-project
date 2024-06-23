import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostProductMutation } from '@/utils/api';

import { ProductFormScheme, productFormScheme } from '../constants';

export const useProductForm = () => {
  const form = useForm<ProductFormScheme>({
    resolver: zodResolver(productFormScheme()),
    defaultValues: {
      name: '',
      description: '',
      phoneNumber: '+998',
      price: '',
      quantity: '',
    },
  });

  const queryClient = useQueryClient();

  const postProductMutation = usePostProductMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getProducts'],
        });
        form.reset();
      },
    },
  });

  const onSubmit = (data: ProductFormScheme) => {
    postProductMutation.mutateAsync({
      params: {
        name: data.name.trim(),
        description: data.description?.trim() || null,
        quantity: +data.quantity,
        price: +data.price,
        phoneNumber: data.phoneNumber,
      },
    });
  };

  return {
    state: { loading: postProductMutation.isPending },
    form,
    functions: { onSubmit },
  };
};
