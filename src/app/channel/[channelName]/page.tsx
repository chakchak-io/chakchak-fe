'use client';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useParams } from 'next/navigation';
import React from 'react';

import { Plus } from '@/components/common/icon';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import { Literal } from '@/components/ui/literal';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { useClientTypedRouter } from '@/hooks';

const DemoTable = () => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>이벤트</TableHead>
          <TableHead>이벤트 시작일시</TableHead>
          <TableHead>예약자 현황</TableHead>
          <TableHead className="w-[100px]">상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>이벤트페어리 팝업스토어</TableCell>
          <TableCell>
            {format(new Date(), 'yyyy년 MM월 dd일(E) HH:mm', {
              locale: ko,
            })}
          </TableCell>
          <TableCell className="min-w-36">
            <Flex direction="column" gap="0.5">
              <Label>
                <Text size="14" weight="medium">
                  200
                </Text>
                <Literal.Space />
                /<Literal.Space />
                <Text color="primary" size="14" weight="semibold">
                  300명
                </Text>
              </Label>
              <Progress value={66} className="h-2 w-full" />
            </Flex>
          </TableCell>
          <TableCell>
            <Button fullWidth variant="outline">
              진행 중
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>010-2313-1234</TableCell>
          <TableCell>
            {format(new Date(), 'yyyy년 MM월 dd일(E) HH:mm', {
              locale: ko,
            })}
          </TableCell>
          <TableCell>
            <Flex direction="column" gap="0.5">
              <Label>
                <Text size="14" weight="medium">
                  200
                </Text>
                <Literal.Space />
                /<Literal.Space />
                <Text color="primary" size="14" weight="semibold">
                  300명
                </Text>
              </Label>
              <Progress value={66} className="h-2 w-full" />
            </Flex>
          </TableCell>
          <TableCell>
            <Button variant="outline" fullWidth>
              대기 중
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const ChannelByNamePage = () => {
  const router = useClientTypedRouter();
  const params = useParams<{
    channelName: string;
  }>();

  // @TODO:
  // 채널 이름이 없으면 채널 페이지로 이동
  // 또는 api로 채널 정보를 가져와서 없으면 채널 페이지로 이동
  if (!params.channelName) {
    router.replace('/channel');
    return null;
  }

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size="md" className="mt-9">
        <Card className="py-6">
          <Flex className="px-6" justify="between">
            <Text weight="bold" size="32">
              이벤트
            </Text>
            <Flex gap="0.5" asChild>
              <Button>
                <Plus width={16} height={16} />
                <Text size="16" weight="medium">
                  새 이벤트 생성하기
                </Text>
              </Button>
            </Flex>
          </Flex>
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">내 이벤트 3</TabsTrigger>
              <TabsTrigger value="end">종료된 이벤트 3</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <DemoTable />
            </TabsContent>
            <TabsContent value="env">
              <DemoTable />
            </TabsContent>
          </Tabs>
        </Card>
      </Container>
    </main>
  );
};

export default ChannelByNamePage;
