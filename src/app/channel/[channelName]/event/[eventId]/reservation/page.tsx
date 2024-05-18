'use client';

import { G } from '@mobily/ts-belt';
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

import { AttendanceStatus } from './attendance-status';
import { Reservation, reservationColumns } from './columns';
import { DateSelect } from './date-select';
import { SendReservationTicketButton } from './send-reservation-ticket-button';
import { tabGuard, tabList } from './tab-list';

const RenderTabContent: FC<{
  tab: (typeof tabList)[number];
  // @TODO: remove it and replace to api
  reservations: Reservation[];
}> = ({ tab, reservations }) => {
  // @TODO: do api call here using tab
  console.log(tab);
  return <DataTable columns={reservationColumns} data={reservations} />;
};

const EventTicketSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId }, searchParams }) => {
  const tab = tabGuard(searchParams.tab) ? searchParams.tab : tabList[0];
  const router = useClientTypedRouter();

  // @TODO: do api call here)
  // @TODO: after real api is implemented, do not prop dril data from root of page
  const data = useMemo(() => Array.from({ length: 40 }, () => createRandomReservation()), []);

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
            <Flex direction="column" gap="1.5" className="mt-6">
              {tab === 'by-time' && (
                <>
                  <DateSelect date={G.isString(searchParams.date) ? searchParams.date : ''} />
                  <Flex>시간 설정 스크롤 섹션</Flex>
                </>
              )}
              <Flex direction="column" gap="1">
                <AttendanceStatus reservations={data} />
                {tabList.map((tab) => (
                  <TabsContent key={`tab-content-${tab}`} value={tab}>
                    <RenderTabContent tab={tab} reservations={data} />
                  </TabsContent>
                ))}
              </Flex>
            </Flex>
          </Tabs>
        </CardContent>
      </Card>
    </Flex>
  );
};

export default EventTicketSettingPage;
