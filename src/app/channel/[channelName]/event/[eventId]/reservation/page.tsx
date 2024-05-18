'use client';

import { NextPage } from 'next';
import { FC, useMemo } from 'react';

import { IconlySharpBoldNotification } from '@/components/common/icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table/data-table';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { createRandomReservation } from '@/const/mock';
import { ChannelName, EventId } from '@/const/router';
import { useClientTypedRouter } from '@/hooks';
import { CommonNextPageProps } from '@/lib/nextjs/type';

import { AttendanceBadge } from './attendance-badge';
import { reservationColumns } from './columns';
import { SendReservationTicketButton } from './send-reservation-ticket-button';
import { tabList } from './tab-list';

const RenderTabContent: FC<{
  tab: string;
}> = ({ tab }) => {
  // @TODO: do api call here

  const data = useMemo(() => Array.from({ length: 40 }, () => createRandomReservation()), []);

  return <DataTable columns={reservationColumns} data={data} />;
};

const EventTicketSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId }, searchParams }) => {
  const tab = typeof searchParams.tab === 'string' ? searchParams.tab : tabList[0];
  const router = useClientTypedRouter();

  // Redirect to channel page if channelName is not provided
  if (!channelName || !eventId) {
    return null;
  }

  return (
    <Flex direction="column" asChild>
      <Card>
        <CardHeader>
          <Flex direction="column" gap="1.5">
            <Flex justify="between" gap="0.5">
              <Text size="32" weight="bold" color="gray/900">
                예약자 관리
              </Text>
              <SendReservationTicketButton />
            </Flex>
            <Flex justify="start" align="center" gap="0.5" asChild>
              <Label className="border-none bg-primary-50 p-6">
                <IconlySharpBoldNotification size="24" color="black" />
                <Text size="16" weight="medium" color="black">
                  예약 티켓에 관한 설명
                </Text>
              </Label>
            </Flex>
          </Flex>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={tab}>
            <TabsList>
              {tabList.map((tab) => (
                <TabsTrigger
                  key={`tab-trigger-${tab}`}
                  value={tab}
                  onClick={() => {
                    router.replace(
                      `/channel/${channelName}/event/${eventId}/reservation?tab=${tab}`,
                      // to prevent scroll to top
                      {
                        scroll: false,
                      },
                    );
                  }}
                >
                  <Text weight="semibold" size="16">
                    {tab === 'all' ? '전체 예약자' : '시간별 예약자'}
                  </Text>
                </TabsTrigger>
              ))}
            </TabsList>
            <Flex direction="column" gap="1">
              <Flex gap="1.5" className="mt-1.5">
                <AttendanceBadge text="전체" count={36} />
                <AttendanceBadge text="참여대기" count={12} badge="pending" />
                <AttendanceBadge text="참여완료" count={12} badge="attended" />
                <AttendanceBadge text="미참석" count={12} badge="not-attended" />
              </Flex>
              {tabList.map((tab) => (
                <TabsContent key={`tab-content-${tab}`} value={tab}>
                  <RenderTabContent tab={tab} />
                </TabsContent>
              ))}
            </Flex>
          </Tabs>
        </CardContent>
      </Card>
    </Flex>
  );
};

export default EventTicketSettingPage;
