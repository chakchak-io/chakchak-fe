'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

import FancyInput from '../components/Forms/FancyInput';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size={'sm'}>
        <Flex direction="column" align="center" gap="2.25" className="mt-[3.875rem]">
          <Text weight="bold" size="32">
            이메일로 로그인
          </Text>
          <Flex direction="column" gap="1.5" className="w-full">
            <FancyInput
              label="이메일"
              value={email}
              onChange={(newValue: string) => setEmail(newValue)}
              placeHolder="이메일을 입력해주세요."
            />
            <FancyInput
              label="비밀번호"
              value={password}
              onChange={(newValue) => setPassword(newValue)}
              placeHolder="비밀번호를 입력해주세요."
              type="password"
            />
            <Flex direction="column" gap="0.5">
              <Button onClick={() => console.log('clicked')}>로그인</Button>
              <Flex align="center" justify="between" className="py-2">
                <Text size="14" weight="medium">
                  아직 계정이 없으신가요?
                </Text>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/signup">
                    <Text size="14" weight="medium">
                      회원가입
                    </Text>
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default SigninPage;
