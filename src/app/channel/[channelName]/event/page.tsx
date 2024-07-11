'use client';

import { NextPage } from 'next';
import { RedirectType } from 'next/navigation';
import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { Plus } from '@/components/common/icon';
import { TypedLink } from '@/components/common/router';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { DataTable } from '@/components/ui/data-table';
import { Flex } from '@/components/ui/flex';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { ChannelName } from '@/const/router';
import { typedRedirect } from '@/lib/nextjs/server-navigation';
import { CommonNextPageProps } from '@/lib/nextjs/type';

import { Event, eventColumns } from './columns';

const DemoTable: FC<{
  channelName: ChannelName;
}> = () => {
  const data: Event[] = [
    {
      id: uuid(),
      no: 1,
      title: '이벤트페어리 팝업스토어',
      startDate: '2024-02-12 19:16:00',
      appointment: {
        current: 200,
        max: 300,
      },
      status: 'in-progress',
    },
    {
      id: uuid(),
      no: 2,
      title: '010-2313-1234',
      startDate: '2024-02-12 19:16:00',
      appointment: {
        current: 200,
        max: 300,
      },
      status: 'pending',
    },
  ];
  return (
    <DataTable.Provider columns={eventColumns} data={data}>
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

const ChannelEventPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
  }>
> = ({ params: { channelName } }) => {
  // @TODO:
  // 채널 이름이 없으면 채널 페이지로 이동
  // 또는 api로 채널 정보를 가져와서 없으면 채널 페이지로 이동
  if (!channelName) {
    typedRedirect('/channel', RedirectType.replace);
    return null;
  }

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderWithChannelTemporailyMade
        channelName={channelName}
        selectedTab="event"
      />
      <Container size="md" className="my-9">
        <Card className="py-6">
          <Flex className="px-6" justify="between">
            <Text weight="bold" size="32">
              이벤트
            </Text>
            <Flex gap="0.5" asChild>
              <Button asChild>
                <TypedLink href={`/channel/${channelName}/event/create`}>
                  <Plus width={16} height={16} />
                  <Text size="16" weight="medium">
                    새 이벤트 생성하기
                  </Text>
                </TypedLink>
              </Button>
            </Flex>
          </Flex>
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">내 이벤트 3</TabsTrigger>
              <TabsTrigger value="end">종료된 이벤트 3</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <DemoTable channelName={channelName} />
            </TabsContent>
            <TabsContent value="end">
              <DemoTable channelName={channelName} />
            </TabsContent>
          </Tabs>
        </Card>
      </Container>
    </main>
  );
};

export default ChannelEventPage;
