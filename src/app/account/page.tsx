import { RedirectType } from 'next/navigation';

import { typedRedirect } from '@/lib/nextjs/server-navigation';

function redirectToAccountMyPage() {
  typedRedirect('/account/my-page', RedirectType.replace);
}

const AccountPage = () => {
  redirectToAccountMyPage();
  return null;
};

export default AccountPage;
