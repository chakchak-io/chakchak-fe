'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import React from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ChannelCategorySelect } from '@/components/common/input';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { useClientTypedRouter } from '@/hooks';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: '채널 이름을 입력해주세요',
    })
    .max(20, {
      message: '채널 이름은 20자 이내로 입력해주세요.',
    }),
  category: z.enum(ChannelCategorySelect.data),
  email: z.string().email({
    message: '채널 대표 메일을 입력해주세요.',
  }),
});

type ChannelSettingForm = z.infer<typeof formSchema>;

const ChannelSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: string;
  }>
> = ({ params }) => {
  const { toast } = useToast();
  const router = useClientTypedRouter();
  const form = useForm<ChannelSettingForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: '팝업스토어',
      email: '',
    },
  });

  // @TODO: implement onSubmit
  const onSubmit = (values: ChannelSettingForm) => {
    console.log(values);
    toast({
      title: 'Need to implement',
      description: 'Channel setting is not implemented yet.',
    });
  };

  const onChannelDelete = () => {
    toast({
      title: 'Need to implement',
      description: 'Channel deletion is not implemented yet.',
    });
    router.push('/channel');
  };

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade
        channelName={params.channelName}
        selectedTab="setting"
      />
      <Container size="md" className="mt-9">
        <Flex direction="column" gap="0.75">
          <Card className="p-6">
            <Form {...form}>
              <Flex direction="column" gap="1.5" asChild>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Flex gap="2.25">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="basis-1/2">
                          <FormLabel required>채널 이름</FormLabel>
                          <FormControl>
                            <Input placeholder="채널 이름을 입력해주세요." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem className="basis-1/2">
                          <FormLabel required>채널 카테고리</FormLabel>
                          <ChannelCategorySelect.Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <ChannelCategorySelect.SelectTrigger>
                                <ChannelCategorySelect.SelectValue placeholder="팝업스토어" />
                              </ChannelCategorySelect.SelectTrigger>
                            </FormControl>
                            <ChannelCategorySelect.SelectContent />
                          </ChannelCategorySelect.Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Flex>
                  <Flex>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <FormItem className="w-full">
                          <FormLabel required>채널 대표 메일</FormLabel>
                          <FormControl>
                            <Input placeholder="채널 대표 메일을 입력해주세요." {...field} />
                          </FormControl>
                          <FormMessage />
                          <Text size="14" weight="medium" color="slate/500" asChild>
                            <FormDescription>
                              채널 및 이벤트에 대한 문의를 받을 수 있는 이메일입니다.
                            </FormDescription>
                          </Text>
                        </FormItem>
                      )}
                    />
                  </Flex>
                  <Flex justify="end">
                    <Button className="w-[200px]" type="submit" disabled={!form.formState.isValid}>
                      저장
                    </Button>
                  </Flex>
                </form>
              </Flex>
            </Form>
          </Card>
          <Flex>
            <Button variant="ghost" onClick={onChannelDelete}>
              <Text size="14" weight="medium" color="gray/400">
                채널삭제
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default ChannelSettingPage;
