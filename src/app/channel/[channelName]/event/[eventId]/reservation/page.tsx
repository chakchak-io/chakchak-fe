'use client';

import { G, O } from '@mobily/ts-belt';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useMemo } from 'react';
import { match } from 'ts-pattern';

import { IconlySharpBoldNotification } from '@/components/common/icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { ChannelName, EventId } from '@/const/router';
import { CommonNextPageProps } from '@/lib/nextjs/type';
import { createQueryString } from '@/lib/string';

import { AttendanceStatus } from './attendance-status';
import { DateSelect } from './date-select';
import { createRandomReservation, Reservation, reservationColumns } from './reservation-columns';
import { SendReservationTicketButton } from './send-reservation-ticket-button';
import { tabGuard, tabList } from './tab-list';
import { TimeSelectSection } from './time-select-section';

const RenderTabContent: FC<{
  tab: (typeof tabList)[number];
  // @TODO: remove it and replace to api
  reservations: Reservation[];
}> = ({ tab, reservations }) => {
  // @TODO: do api call here using tab
  console.log(tab);
  return (
    <DataTable.Provider columns={reservationColumns} data={reservations}>
      {({ table, columns }) => (
        <Flex className="w-full" direction="column" gap="2">
          <DataTable.Root>
            <DataTable.Header table={table} />
            <DataTable.Body table={table} columns={columns} />
          </DataTable.Root>
          <DataTable.Pagination table={table} />
        </Flex>
      )}
    </DataTable.Provider>
  );
};

const EventTicketSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId }, searchParams }) => {
  const date: O.Option<string> = G.isString(searchParams.date) ? searchParams.date : O.None;
  const tab = tabGuard(searchParams.tab) ? searchParams.tab : tabList[0];
  const searchParamsByHook = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
              <SendReservationTicketButton date={date} />
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
                    replace(
                      pathname + '?' + createQueryString(searchParamsByHook, 'tab', tab),
                      // to prevent scroll to top
                      {
                        scroll: false,
                      },
                    );
                  }}
                >
                  <Text weight="semibold" size="16">
                    {match(tab)
                      .with('all', () => '전체 예약자')
                      .with('by-time', () => '시간별 예약자')
                      .exhaustive()}
                  </Text>
                </TabsTrigger>
              ))}
            </TabsList>
            <Flex direction="column" gap="1.5" className="mt-6">
              {tab === 'by-time' && (
                <>
                  <Flex direction="column" gap="0.375">
                    <Text size="14" weight="medium" color="#0f172a">
                      날짜 설정
                    </Text>
                    <DateSelect date={date} />
                  </Flex>
                  <TimeSelectSection date={date} />
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
