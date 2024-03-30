import { NextPage } from 'next';
import { PropsWithChildren } from 'react';

import { AppLayout } from '@/components/layout';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { ChannelName, EventId } from '@/const/router';
import { typedRedirect } from '@/lib/nextjs/server-navigation';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const EventDashboardLayout: NextPage<
  PropsWithChildren<
    CommonNextPageProps<{
      channelName: ChannelName;
      eventId: EventId;
    }>
  >
> = ({ children, params: { channelName, eventId } }) => {
  if (!channelName || !eventId) {
    typedRedirect('/channel');
    return null;
  }

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Flex>
        <AppLayout.SideMenu.Make channelName={channelName} eventId={eventId} />
        <Container className="min-h-screen bg-gray-100 py-14">{children}</Container>
      </Flex>
    </main>
  );
};

export default EventDashboardLayout;
