'use client';

import { Globe } from 'lucide-react';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useState } from 'react';
import { match } from 'ts-pattern';

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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Flex } from '@/components/ui/flex';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { ChannelName, EventId } from '@/const/router';
import { useOverlay } from '@/hooks/use-overlay';
import { CommonNextPageProps } from '@/lib/nextjs/type';
import { createQueryString } from '@/lib/string';

import { DefaultSettingTabOfflineContent } from './default-setting-tab-offline-content';
import { DefaultSettingTabOnlineContent } from './default-setting-tab-online-content';
import { EventPageContext } from './event-page-context';
import { ImageButtonSettingTabContent } from './image-button-setting-tab-content';
import { tabGuard, tabList, TabList } from './tab-list';

const RenderDefaultTab: FC = () => {
  // @TODO: do api call here
  const type: 'online' | 'offline' = 'online';

  // @TODO: remove generic
  return match<'online' | 'offline'>(type)
    .with('online', () => <DefaultSettingTabOnlineContent />)
    .with('offline', () => <DefaultSettingTabOfflineContent />)
    .exhaustive();
};

const EventSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId }, searchParams }) => {
  const [tab, setTab] = useState(tabGuard(searchParams.tab) ? searchParams.tab : tabList[0]);
  const [currentTabDirty, setCurrentTabDirty] = useState(false);

  const { replace } = useRouter();
  const searchParamsByHook = useSearchParams();
  const pathname = usePathname();
  const overlay = useOverlay();

  const confirm = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <AlertDialog open={isOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>변경 사항을 저장하셨나요?</AlertDialogTitle>
              <AlertDialogDescription>
                페이지 이동 시, 변경사항은 저장되지 않아요.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  resolve(false);
                  close();
                }}
              >
                취소
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  resolve(true);
                  close();
                }}
              >
                확인
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ));
    });
  }, [overlay]);

  const onTabChange = async (tab: string) => {
    if (currentTabDirty) {
      const isConfirmed = await confirm();

      if (!isConfirmed) {
        return;
      }
    }

    replace(
      pathname + '?' + createQueryString(searchParamsByHook, 'tab', tab),
      // to prevent scroll to top
      {
        scroll: false,
      },
    );
    setTab(tab as TabList);
    // Reset dirty state when tab is changed
    setCurrentTabDirty(false);
  };

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
          <EventPageContext
            currentTabDirty={currentTabDirty}
            onCurrentTabDirtyChange={setCurrentTabDirty}
          >
            <AlertDialog>
              <Tabs
                value={tab}
                onValueChange={(value) => {
                  onTabChange(value);
                }}
              >
                <TabsList>
                  {tabList.map((tab) => (
                    <TabsTrigger key={`tab-trigger-${tab}`} value={tab}>
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
                          .with('default', () => <RenderDefaultTab />)
                          .with('image-button', () => <ImageButtonSettingTabContent />)
                          .exhaustive()}
                      </TabsContent>
                    ))}
                  </Flex>
                </Flex>
              </Tabs>
            </AlertDialog>
          </EventPageContext>
        </CardContent>
      </Card>
    </Flex>
  );
};

export default EventSettingPage;
