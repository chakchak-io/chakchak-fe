import { NextPage } from 'next';
import { FC } from 'react';

import { ActionCopy, IconlySharpBoldCalendar } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

const mockEventData = {
  id: '1',
  name: '이벤트페어리 강남주식회사 이벤트시작하자',
  description: '이벤트 설명',
  eventType: 'online',
  startAt: undefined,
  endAt: undefined,
  location: undefined,
  eventUrl: 'https://eventfairy.com/event/event-id-in-hash',
};

const EventByNamePageHeader: FC = () => {
  // @TODO: replace to suspenseQuery
  const { name, eventType, startAt, endAt, eventUrl } = mockEventData;

  return (
    <Flex direction="column" gap="1.5">
      <Card>
        <CardContent>
          <Flex gap="0.5" direction="column" className="mb-6">
            <Text size="24" weight="bold">
              {name}
            </Text>
            <Flex>
              <Text
                weight="medium"
                color="primary/300"
                className="rounded-lg border border-gray-100 bg-[#F0ECFF] px-4 py-2"
              >
                {eventType === 'online' ? '온라인' : '오프라인'}
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <IconlySharpBoldCalendar size="24" color="gray/500" />
              {startAt && endAt ? (
                <Text>언제부터 언제까지</Text>
              ) : (
                <Text color="gray/400" weight="medium">
                  설정된 이벤트 날짜가 없습니다.
                </Text>
              )}
            </Flex>
          </Flex>
        </CardContent>

        <Container className="mb-6 rounded-lg border border-gray-200 px-4 py-2">
          <Flex align="center" justify="between" className="">
            <Flex className="w-full">
              <Container className="max-w-[110px_!important] border-r">
                <Text size="14" weight="medium">
                  예약페이지 주소
                </Text>
              </Container>

              <Text className="ml-[21px]">{eventUrl}</Text>
            </Flex>
            <Button className="border bg-transparent p-[6px]">
              <ActionCopy size="20" color="#A1A1AA" />
            </Button>
          </Flex>
        </Container>
      </Card>

      {/* Policy and check steps */}
      <Card>
        <Container className="flex flex-row border-r border-gray-200">
          <Text>안내글</Text>
          <Button className="mt-4 rounded-md border bg-transparent text-black">
            가격정책 보기
          </Button>
        </Container>
      </Card>
    </Flex>
  );
};

const EventByIdPage: NextPage = () => {
  // @TODO: Wrap with Suspense Component
  return <EventByNamePageHeader />;
};

export default EventByIdPage;
