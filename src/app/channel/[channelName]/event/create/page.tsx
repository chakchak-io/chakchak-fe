import { NextPage } from 'next';
import { RedirectType } from 'next/navigation';

import { TypedLink } from '@/components/common/router';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { ChannelName } from '@/const/router';
import { typedRedirect } from '@/lib/nextjs/server-navigation';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const EventCreatePage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
  }>
> = ({ params: { channelName } }) => {
  // Redirect to channel page if channelName is not provided
  if (!channelName) {
    typedRedirect('/channel', RedirectType.replace);
  }

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container size="sm" className="my-14">
        <Flex direction="column" gap="2.25">
          <Flex justify="center">
            <Text size="24" weight="bold" color="gray/900">
              온, 오프라인 여부를 선택해주세요.
            </Text>
          </Flex>
          <Flex gap="1.25">
            {/* @TODO: there is possibility to modify outline button prop itself to below  */}
            {/* @TODO: theme이 바뀌더라도 변경되지 않을 것. global.css에 정의된 token값을 이용하도록 바꿔야함 */}
            <Button
              variant="outline"
              className="basis-1/2 px-6 py-20 text-gray-800 hover:border-primary-100 hover:bg-primary-50 hover:text-primary"
              asChild
            >
              <TypedLink href={`/channel/${channelName}/event/create/online`}>
                <Text size="22" weight="bold">
                  온라인 이벤트
                </Text>
              </TypedLink>
            </Button>

            {/* @TODO: there is possibility to modify outline button prop itself to below  */}
            <Button
              variant="outline"
              className="basis-1/2 px-6 py-20 text-gray-800 hover:border-primary-100 hover:bg-primary-50 hover:text-primary"
              asChild
            >
              <TypedLink href={`/channel/${channelName}/event/create/offline`}>
                <Text size="22" weight="bold">
                  온프라인 이벤트
                </Text>
              </TypedLink>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default EventCreatePage;
