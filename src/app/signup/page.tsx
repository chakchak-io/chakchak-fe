'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import { Flex, Container } from '@radix-ui/themes';
import FancyInput from '../components/Forms/FancyInput';
import Link from 'next/link';
import Button from '../components/Button';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <Header />
      <Flex direction="column" align="center" asChild className="mt-[62px]">
        <h2 className="text-[32px] leading-[38px] font-bold">
          이메일로 로그인
        </h2>
      </Flex>
      <Container size="1">
        <Flex direction="column" gap="6" mt="7">
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
          />
          <Flex direction="column" gap="1" className="mt-4">
            <Button disabled={true} onClick={() => console.log('clicked')}>
              회원가입
            </Button>
            <Flex justify="between" className="py-2">
              <div className="font-medium text-[14px]">
                이미 계정이 있으신가요?
              </div>
              <Link
                href="/signin"
                className="text-primary font-medium text-[14px] hover:opacity-85"
              >
                로그인
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default SignupPage;
