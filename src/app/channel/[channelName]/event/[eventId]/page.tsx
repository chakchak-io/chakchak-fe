'use client';

import { NextPage } from 'next';
import { FC } from 'react';

import { ActionCopy, IconlySharpBoldCalendar } from '@/components/common/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Flex } from '@/components/ui/flex';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';

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

const RenderPage: FC = () => {
  const { toast } = useToast();
  // @TODO: replace to suspenseQuery
  const { name, eventType, startAt, endAt, eventUrl } = mockEventData;

  return (
    <Flex direction="column" gap="1.5">
      <Card>
        <CardHeader>
          <Flex gap="0.5" direction="column">
            <Text size="24" weight="bold" color="black">
              {name}
            </Text>
            <Flex gap="0.75">
              {/* @TODO: replace to badge component */}
              {/* @TODO: improve button component */}
              <Badge radius="md" size="button" colorReverse>
                <Text size="16" weight="medium">
                  {eventType === 'online' ? '온라인' : '오프라인'}
                </Text>
              </Badge>
              {/* @TODO: make it tokenize for background color */}
              <Badge
                variant="secondary"
                radius="md"
                size="button"
                colorReverse
                className="bg-[#fff0e5]"
              >
                <Text size="16" weight="medium" color="#ff6a00">
                  무료
                </Text>
              </Badge>
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
        </CardHeader>
        <CardContent>
          <Flex
            align="center"
            justify="between"
            className="relative rounded-lg border border-input p-4"
          >
            <Flex align="center">
              <Text size="14" weight="medium" color="black">
                예약페이지 주소
              </Text>
              <Separator orientation="vertical" className="ml-4 h-4" color="#E4E4E7" />
              <Text size="14" weight="medium" color="black" className="ml-[21px] leading-none">
                {eventUrl}
              </Text>
            </Flex>
            <Button
              className="absolute right-4 size-8 p-1.5"
              variant="outline"
              onClick={() => {
                toast({
                  title: 'Need to implement',
                  description: 'Edit account name is not implemented yet.',
                });
              }}
            >
              <ActionCopy size="20" color="#A1A1AA" />
            </Button>
          </Flex>
        </CardContent>
      </Card>

      {/* Policy and check steps */}
      <Card>
        <CardHeader>
          <Flex>
            <Flex className="basis-[539px]" direction="column" gap="0.5">
              <Flex>
                <Text>결제 관련 정책 및 안내</Text>
              </Flex>
              <Flex>
                <Button variant="outline">가격정책 보기</Button>
              </Flex>
            </Flex>
            <Flex>
              <Separator orientation="vertical" />
            </Flex>
            <Flex className="basis-[200px] pl-8" direction="column" justify="between">
              {[
                '이벤트 페이지 설정',
                '이벤트 날짜/인원 설정',
                '예약 티켓/발송',
                '이벤트 페이지 관리',
              ].map((step, index) => (
                <Flex key={index} align="center" gap="0.5">
                  <Checkbox />
                  <Text size="14" weight="medium" color="black">
                    {step}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    </Flex>
  );
};

const EventByIdPage: NextPage = () => {
  // @TODO: Wrap with Suspense Component
  return <RenderPage />;
};

export default EventByIdPage;
