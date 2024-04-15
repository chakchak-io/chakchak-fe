import React, { Suspense } from 'react';
import { useIsMounted } from 'usehooks-ts';

const SSRSafeSuspense = (props: React.ComponentProps<typeof Suspense>) => {
  const { fallback } = props;
  const isMounted = useIsMounted();

  if (isMounted()) {
    return <Suspense {...props} />;
  }
  return <>{fallback}</>;
};

export default SSRSafeSuspense;
