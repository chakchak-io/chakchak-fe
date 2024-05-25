'use client';

import { Globe } from 'lucide-react';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { match } from 'ts-pattern';

import { TypedLink } from '@/components/common/router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Flex } from '@/components/ui/flex';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { ChannelName, EventId } from '@/const/router';
import { CommonNextPageProps } from '@/lib/nextjs/type';
import { createQueryString } from '@/lib/string';

import { DefaultSettingTabContent } from './default-setting-tab-content';
import { ImageButtonSettingTabContent } from './image-button-setting-tab-content';
import { tabGuard, tabList } from './tab-list';

const EventSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId }, searchParams }) => {
  const tab = tabGuard(searchParams.tab) ? searchParams.tab : tabList[0];
  const searchParamsByHook = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // @TODO: do api call here)

  // Redirect to channel page if channelName is not provided
  if (!channelName || !eventId) {
    return null;
  }

  return (
    <Flex direction="column" asChild>
      <Card>
        <CardHeader>
          <Flex direction="column" gap="1">
            <Flex justify="between" gap="0.5">
              <Text size="32" weight="bold" color="gray/900">
                이벤트 페이지 설정
              </Text>
              <TypedLink href="/preview">
                <Flex gap="0.5" asChild>
                  {/* @TODO: add query string about info */}
                  <Button>
                    <Globe size="16" />
                    <Text size="16" weight="medium">
                      이벤트 페이지 미리보기
                    </Text>
                  </Button>
                </Flex>
              </TypedLink>
            </Flex>
            <Flex>
              <Text size="16" weight="medium" color="gray/500">
                이벤트 정보와 장소를 입력해주세요.
              </Text>
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
                      .with('default', () => '이벤트 기본정보')
                      .with('image-button', () => '이미지 및 버튼 설정')
                      .exhaustive()}
                  </Text>
                </TabsTrigger>
              ))}
            </TabsList>
            <Flex direction="column" gap="1.5" className="mt-6">
              <Flex direction="column" gap="1">
                {tabList.map((tab) => (
                  <TabsContent key={`tab-content-${tab}`} value={tab}>
                    {match(tab)
                      .with('default', () => <DefaultSettingTabContent />)
                      .with('image-button', () => <ImageButtonSettingTabContent />)
                      .exhaustive()}
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

export default EventSettingPage;
