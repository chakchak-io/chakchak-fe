'use client';

import { useState } from 'react';
import { match } from 'ts-pattern';

import { Center } from '@/components/common/display';
import { Plus } from '@/components/common/icon';
import { TypedLink } from '@/components/common/router';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

const NoCreatedChannels = () => {
  return (
    <div className="h-full">
      <Center>
        <Flex direction="column" gap="2.25">
          <Flex direction="column" gap="0.5">
            <Text weight="semibold" size="32" color="gray/500">
              아직 만들어진 채널이 없어요.
            </Text>
            <Flex direction="column" align="center">
              <Text weight="medium" color="gray/500">
                내 채널을 만든 후
              </Text>
              <Text weight="medium" color="gray/500">
                이벤트를 생성할 수 있어요.
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center">
            {/* @TODO: padding 관련 논의 필요 */}
            <Button asChild>
              <TypedLink href="/channel/create">
                <Flex align="center" gap="2">
                  <Plus /> <Text weight="medium">새 채널 생성하기</Text>
                </Flex>
              </TypedLink>
            </Button>
          </Flex>
        </Flex>
      </Center>
    </div>
  );
};

const ChannelPage = () => {
  const [channels] = useState([]);
  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container className="h-[calc(100vh-4rem)]">
        {match(channels)
          .with([], () => <NoCreatedChannels />)
          .otherwise(() => (
            <div>Channels</div>
          ))}
      </Container>
    </main>
  );
};

export default ChannelPage;
