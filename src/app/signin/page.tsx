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
import { useToast } from '@/components/ui/use-toast';
import { useClientTypedRouter } from '@/hooks';

const formSchema = z.object({
  email: z.string().email({
    message: '이메일을 입력해주세요',
  }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해주세요',
  }),
});

type SigninForm = z.infer<typeof formSchema>;

const SigninPage = () => {
  const { toast } = useToast();
  const router = useClientTypedRouter();
  const form = useForm<SigninForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: SigninForm) => {
    console.log(values);
    toast({
      title: 'Need to implement',
      description: 'Signin is not implemented yet.',
    });
    router.push('/channel');
  };

  return (
    <main>
      <AppLayout.Header.Make />
      <Container size="xs" className="mt-20">
        <Flex direction="column" align="center" gap="2.25">
          <Text weight="bold" size="32">
            이메일로 로그인
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
                    로그인
                  </Button>
                  <Flex align="center" justify="between" className="py-2">
                    <Text size="14" weight="medium">
                      아직 계정이 없으신가요?
                    </Text>
                    <Button variant="link" className="p-0" asChild>
                      <TypedLink href="/signup">
                        <Text size="14" weight="medium">
                          회원가입
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

export default SigninPage;
