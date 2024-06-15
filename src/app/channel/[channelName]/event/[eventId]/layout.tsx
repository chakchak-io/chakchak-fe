import { AppLayout } from '@/components/layout';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { ChannelName, EventId } from '@/const/router';
import { typedRedirect } from '@/lib/nextjs/server-navigation';

export default function EventPageLayout({
  children,
  params: { channelName, eventId },
}: {
  children: React.ReactNode;
  params: {
    channelName: ChannelName;
    eventId: EventId;
  };
}) {
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
}
