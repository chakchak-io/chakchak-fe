import { NextPage } from 'next';

import { AppLayout } from '@/components/layout';
import { Container } from '@/components/ui/container';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const ChannelTicketPage: NextPage<
  CommonNextPageProps<{
    channelName: string;
  }>
> = ({ params }) => {
  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderWithChannelTemporailyMade
        channelName={params.channelName}
        selectedTab="ticket"
      />
      <Container size="md" className="my-9">
        Get Your Ticket
      </Container>
    </main>
  );
};

export default ChannelTicketPage;