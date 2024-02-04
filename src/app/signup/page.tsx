'use client';

import React, { useState } from 'react';

import { TypedLink } from '@/components/common/router';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

import FancyInput from '../components/Forms/FancyInput';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size="sm">
        <Flex direction="column" align="center" gap="2.25" className="mt-[3.875rem]">
          <Text weight="bold" size="32">
            회원가입
          </Text>
          <Flex direction="column" gap="1.5" className="w-full">
            <FancyInput
              label="이메일"
              value={email}
              onChange={(newValue: string) => setEmail(newValue)}
              placeHolder="이메일을 입력해주세요."
              type="email"
            />
            <FancyInput
              label="이름"
              value={name}
              onChange={(newValue: string) => setName(newValue)}
              placeHolder="담당자 성함을 입력해주세요."
            />
            <FancyInput
              label="소속"
              value={organization}
              onChange={(newValue: string) => setOrganization(newValue)}
              placeHolder="회사나 단체명을 입력해주세요."
            />
            <FancyInput
              label="비밀번호"
              value={password}
              onChange={(newValue) => setPassword(newValue)}
              placeHolder="비밀번호를 입력해주세요."
              type="password"
            />
            <Flex direction="column" gap="0.5">
              <Button disabled onClick={() => console.log('clicked')}>
                회원가입
              </Button>
              <Flex align="center" justify="between" className="py-2">
                <Text size="14" weight="medium">
                  계정이 있으신가요?
                </Text>
                <Button variant="link" className="p-0" asChild>
                  <TypedLink href="/signin">
                    <Text size="14" weight="medium">
                      로그인
                    </Text>
                  </TypedLink>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default SignupPage;
