import { MutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import client from '@/api/client';
import { userInfoKey } from '@/api/queryKey';

type UnknownFailure = unknown;

type SampleRequest = Parameters<typeof client.deleteUserAccount>[0];

export default function useBackofficeAccountDelete(
  options?: MutationOptions<void, UnknownFailure, SampleRequest>,
) {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, UnknownFailure, SampleRequest>({
    mutationFn: async (req) => {
      await client.deleteUserAccount(req);
    },
    onSuccess: (data, req) => {
      // for optimistic update
      queryClient.setQueryData(userInfoKey.getById(req), data);
      // for refetch
      queryClient.invalidateQueries({
        queryKey: userInfoKey.getById(req),
      });
    },
    ...options,
  });

  return mutation;
}
