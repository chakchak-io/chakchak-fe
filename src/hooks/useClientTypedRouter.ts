import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { AccessibleRoute } from '@/const/router';

// @TODO: 개선 필요
export function useClientTypedRouter() {
  const { push: originPush, replace: originReplace, ...rest } = useRouter();

  const push = useCallback(
    (href: AccessibleRoute, options?: Parameters<typeof originPush>[1]) => {
      originPush(href, options);
    },
    [originPush],
  );

  const replace = useCallback(
    (href: AccessibleRoute, options?: Parameters<typeof originReplace>[1]) => {
      originReplace(href, options);
    },
    [originReplace],
  );

  return {
    push,
    replace,
    ...rest,
  };
}
