import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import client from '@/api/client';

import { userInfoKey } from '../queryKey';

type SampleParameter = {
  userId: string;
};

type SampleResponse = Awaited<ReturnType<typeof client.getUserAccount>>['data'];

type UnknownFailure = unknown;

export default function useUserInfo(
  { userId }: SampleParameter,
  options?: Omit<UseQueryOptions<SampleResponse, UnknownFailure>, 'queryKey' | 'queryFn'>,
) {
  return useSuspenseQuery<SampleResponse, UnknownFailure>({
    queryKey: userInfoKey.getById(userId),
    queryFn: async () => {
      const response = await client.getUserAccount(userId);
      return response.data;
    },
    ...options,
  });
}
