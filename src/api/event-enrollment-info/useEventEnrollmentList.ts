import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import client from '@/api/client';

import { eventEnrollmentInfoKey } from '../queryKey';

type SampleResponse = Awaited<ReturnType<typeof client.getEventEnrollmentInfo>>['data'];

type UnknownFailure = unknown;

export default function useBackofficeAccountList(
  options?: Omit<UseQueryOptions<SampleResponse, UnknownFailure>, 'queryKey' | 'queryFn'>,
) {
  return useSuspenseQuery<SampleResponse, UnknownFailure>({
    queryKey: eventEnrollmentInfoKey.list(),
    queryFn: async () => {
      const response = await client.getEventEnrollmentInfo();
      return response.data;
    },
    ...options,
  });
}
