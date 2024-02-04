'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { useClientTypedRouter } from '@/hooks';

const generatePurposeOption = [
  '컨퍼런스, 세미나',
  '축제',
  '커뮤니티, 모임',
  '팝업스토어',
  '공연, 엔터테이먼트',
  '쇼핑몰, 마켓',
  '기타',
] as const;

const formSchema = z.object({
  channelName: z
    .string()
    .min(2, {
      message: '채널 이름은 최소 2자 이상이어야 합니다.',
    })
    .max(20, {
      message: '채널 이름은 최대 20자 이하여야 합니다.',
    }),
  category: z.enum(generatePurposeOption),
  userEmail: z
    .string()
    .min(1, {
      message: '이메일을 입력해주세요.',
    })
    .email({
      message: '이메일 형식이 올바르지 않습니다.',
    }),
});

type ChannelCreateForm = z.infer<typeof formSchema>;

const ChannelCreatePage = () => {
  const router = useClientTypedRouter();
  const form = useForm<ChannelCreateForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      channelName: '',
      category: '팝업스토어',
      userEmail: '',
    },
  });

  const onSubmit = (values: ChannelCreateForm) => {
    console.log(values);
    router.push(`/channel/${values.channelName}`);
  };

  return (
    <main className="size-full">
      <AppLayout.Header.Make />
      <Container size="xs">
        <Flex direction="column" align="center" gap="2.25" className="mt-[3.875rem]">
          <Text weight="bold" size="32">
            이메일로 로그인
          </Text>
          <Form {...form}>
            <Flex className="w-full" direction="column" gap="2" asChild>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="channelName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>채널 이름을 입력해 주세요.</FormLabel>
                      <FormControl>
                        <Input placeholder="이벤트페어리 채널" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>채널 카테고리를 선택해주세요.</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="팝업스토어" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @TODO: global css의 accent color 수정 필요.
                            단, accent-color foreground의 쓰임세를 몰라 당장 수정하지 않음.
                          */}
                          {generatePurposeOption.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>
                        채널 및 이벤트에 대해 문의할 수 있는 이메일을 입력해주세요.
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="EventFairy@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Flex>
                  <Button fullWidth type="submit">
                    생성하기
                  </Button>
                </Flex>
              </form>
            </Flex>
          </Form>
        </Flex>
      </Container>
    </main>
  );
};

export default ChannelCreatePage;
