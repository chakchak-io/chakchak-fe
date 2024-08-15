'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { TypedLink } from '@/components/common/router';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

import { signup } from './actions';

export interface SignupRequestData {
  email: string;
  name: string;
  organization: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email({
    message: '올바른 이메일 형식을 입력해주세요',
  }),
  name: z.string().min(1, {
    message: '이름을 입력해주세요',
  }),
  organization: z.string().min(1, {
    message: '소속을 입력해주세요',
  }),
  password: z.string().min(8, {
    message: '8자 이상 입력해주세요',
  }),
});

export type SignupForm = z.infer<typeof formSchema>;

const SignupPage = () => {
  const form = useForm<SignupForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      organization: '',
      password: '',
    },
  });

  const onSubmit = (values: SignupForm) => signup(values);

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size="xs" className="my-20">
        <Flex direction="column" align="center" gap="2.25">
          <Text weight="bold" size="32">
            회원가입
          </Text>
          <Form {...form}>
            <Flex className="w-full" direction="column" gap="2" asChild>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="이메일을 입력해주세요." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="담당자 성함을 입력해주세요." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>소속</FormLabel>
                      <FormControl>
                        <Input placeholder="회사나 단체명을 입력해주세요." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>비밀번호</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="비밀번호를 입력해주세요." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Flex direction="column" gap="0.5">
                  <Button fullWidth type="submit" disabled={!form.formState.isValid}>
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
              </form>
            </Flex>
          </Form>
        </Flex>
      </Container>
    </main>
  );
};

export default SignupPage;
