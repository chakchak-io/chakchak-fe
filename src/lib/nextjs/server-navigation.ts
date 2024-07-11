import { redirect } from 'next/navigation';

import { AccessibleRoute } from '@/const/router';

type RedirectTypeParams = Parameters<typeof redirect>;
const typedRedirect = (url: AccessibleRoute, type?: RedirectTypeParams[1]) => {
  redirect(url, type);
};

export { typedRedirect };
