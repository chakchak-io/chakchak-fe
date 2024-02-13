import { NextPage } from 'next';
import { RedirectType } from 'next/navigation';

import { typedRedirect } from '@/lib/nextjs/server-navigation';
import { CommonNextPageProps } from '@/lib/nextjs/type';

type ChannelByNamePageProps = CommonNextPageProps<{
  channelName: string;
}>;

function redirectToEventPage(channelName?: string) {
  if (!channelName) typedRedirect('/channel', RedirectType.replace);
  else {
    typedRedirect(`/channel/${channelName}/event`, RedirectType.replace);
  }
}

const ChannelByNamePage: NextPage<ChannelByNamePageProps> = ({ params: { channelName } }) => {
  redirectToEventPage(channelName);
  return null;
};

export default ChannelByNamePage;
