import Image from 'next/image';
import React from 'react';

import { AppLayout } from '@/components/layout';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

const CheckMailPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const email = searchParams.email as string;

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size="xs" className="mt-20">
        <Flex className="mt-40 w-full text-center" direction="column" align="center" gap="2">
          <Image src="/checkmail_main.jpg" alt="메일함 확인" width={151} height={107} />

          <Text weight="bold" as="p" size="24">
            회원가입 인증 이메일을 발송했어요.
          </Text>

          <Text as="p" size="16" weight="medium" color="gray/500">
            <span className="text-[#5A84D6]">{email ?? ''}</span> 로 인증 메일 보냈어요.
            <br /> 이메일 인증 버튼 클릭하면 회원가입이 완료됩니다.
          </Text>
        </Flex>
      </Container>
    </main>
  );
};

export default CheckMailPage;
