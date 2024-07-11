import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useClientQueryString = () => {
  const searchParams = useSearchParams();

  const getQueryString = useCallback(
    (name: string) => {
      return searchParams.get(name) || '';
    },
    [searchParams],
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return { getQueryString, createQueryString };
};
