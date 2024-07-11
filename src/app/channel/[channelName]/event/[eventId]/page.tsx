'use client';

import { NextPage } from 'next';
import { FC, useState } from 'react';
import { match } from 'ts-pattern';
import { useCopyToClipboard } from 'usehooks-ts';

import { ActionCopy, ChevronRight, IconlySharpBoldCalendar } from '@/components/common/icon';
import { TypedLink } from '@/components/common/router';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Flex } from '@/components/ui/flex';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { ChannelName, EventId } from '@/const/router';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const mockEventData = {
  id: '1',
  name: '이벤트페어리 강남주식회사 이벤트시작하자',
  description: '이벤트 설명',
  eventType: 'online',
  startAt: undefined,
  endAt: undefined,
  location: undefined,
  eventUrl: 'https://eventfairy.com/event/event-id-in-hash',
  activated: false,
};

// api data
const apiSteps = [
  {
    type: 'event-page',
    done: true,
  },
  {
    type: 'event-date-people',
    done: true,
  },
  {
    type: 'ticket',
    done: true,
  },
  {
    type: 'survey',
    done: true,
  },
] as const;

const getTitle = (step: (typeof apiSteps)[number]) =>
  match(step)
    .with({ type: 'event-page' }, () => '이벤트 페이지 설정')
    .with({ type: 'event-date-people' }, () => '이벤트 날짜/인원 설정')
    .with({ type: 'ticket' }, () => '예약 티켓/발송')
    .with({ type: 'survey' }, () => '이벤트 페이지 관리')
    .exhaustive();

const RenderPage: FC<{
  channelName: ChannelName;
  eventId: EventId;
}> = ({ channelName, eventId }) => {
  const { toast } = useToast();
  // @TODO: replace to suspenseQuery
  const [eventData, setEventData] = useState(mockEventData);
  const { name, eventType, startAt, endAt, eventUrl, activated } = eventData;

  const [steps] = useState(apiSteps);
  const canStart = steps.every((step) => step.done);

  const [_, copyToClipboard] = useCopyToClipboard();

  const handleEventStart = () => {
    setEventData((prev) => ({ ...prev, activated: true }));
  };

  const handleEventEnd = () => {
    setEventData((prev) => ({ ...prev, activated: false }));
  };

  const handleCopy = async (text: string) => {
    try {
      await copyToClipboard(text);
      toast({
        description: '주소가 복사되었습니다.',
      });
    } catch (e) {
      toast({
        description: '복사에 실패했습니다. 다시 시도해주세요.',
      });
    }
  };

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
                handleCopy(eventUrl);
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
            <Flex className="basis-[200px] pl-8" direction="column" justify="between" gap="2">
              {steps.map((step, index) => {
                return (
                  // @TODO: add appropriate router
                  <TypedLink key={index} href={`/channel/${channelName}/event/${eventId}`}>
                    <Flex justify="between" align="center" gap="0.5" className="w-56">
                      <Flex gap="0.5" align="center">
                        <Checkbox checked={step.done} className="pointer-events-none" />
                        <Text size="14" weight="medium" color="black">
                          {getTitle(step)}
                        </Text>
                      </Flex>
                      <ChevronRight className="shrink-0" size="24" />
                    </Flex>
                  </TypedLink>
                );
              })}

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  {activated ? (
                    <Button activated>이벤트 종료하기</Button>
                  ) : (
                    <Button disabled={!canStart}>이벤트 시작하기</Button>
                  )}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {activated ? '이벤트를 종료할까요?' : '이벤트 개최할까요?'}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {activated
                        ? '이벤트가 종료되면 예약자 관리 리스트에서 삭제되고, 다시 복구할 수 없습니다.'
                        : '예약자 관리 리스트에서 삭제되고, 다시 복구할 수 없습니다.'}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        activated ? handleEventEnd() : handleEventStart();
                      }}
                    >
                      확인
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    </Flex>
  );
};

const EventByIdPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params }) => {
  // @TODO: Wrap with Suspense Component
  return <RenderPage channelName={params.channelName} eventId={params.eventId} />;
};

export default EventByIdPage;
