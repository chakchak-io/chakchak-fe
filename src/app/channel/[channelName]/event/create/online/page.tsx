'use client';

import { AppLayout } from '@/components/layout';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

const CreateOnlineEventPage = () => {
  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container size="sm" className="mt-14">
        <Flex direction="column" gap="2.25">
          <Flex justify="center">
            <Text weight="bold" size="24" color="gray/900">
              이벤트 정보를 입력해주세요.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default CreateOnlineEventPage;
