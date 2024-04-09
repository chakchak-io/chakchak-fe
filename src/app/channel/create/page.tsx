'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ChannelCategorySelect } from '@/components/common/input';
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
import { useClientTypedRouter, useSupabaseBrowser } from '@/hooks';
import { useChannelCategoriesQuery } from '@/hooks/channel';
import useChannelMutation from '@/hooks/channel/useChannelMutation';

const formSchema = z.object({
  channelName: z
    .string()
    .min(2, {
      message: '채널 이름은 최소 2자 이상이어야 합니다.',
    })
    .max(20, {
      message: '채널 이름은 최대 20자 이하여야 합니다.',
    }),
  category: z.string().min(2, { message: '카테고리를 선택해주세요.' }),
  contactEmail: z
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
      category: 'popup',
      contactEmail: '',
    },
  });
  const supabase = useSupabaseBrowser();
  const channelMutation = useChannelMutation(supabase);
  const { data, error: channelCategoryLoadError } = useChannelCategoriesQuery(supabase);

  //FIXME: 여기서 toast로 에러 메시지 띄우기
  if (channelCategoryLoadError) window.alert('채널 카테고리 목록을 불러오지 못했습니다.');

  const onSubmit = async (values: ChannelCreateForm) => {
    // router.push(`/channel/${values.channelName}`);
    console.log(values);
    const createChannelDataAdapter = async (formData: ChannelCreateForm) => {
      const userResponse = await supabase.auth.getUser();
      if (userResponse.error) {
        throw new Error('로그인이 필요합니다.');
      }
      return {
        name: formData.channelName,
        category: formData.category,
        contact_email: formData.contactEmail,
        owner: userResponse.data.user.id,
      };
    };
    // we trigger a mutation here
    const createChannelData = await createChannelDataAdapter(values);
    channelMutation.mutate(createChannelData, {
      onSuccess: () => {
        //FIXME: 여기서 toast로 성공 메시지 띄우기
        router.push('/channel');
      },
      onError: (error) => {
        console.log(error);
        //FIXME:
      },
    });
  };

  return (
    <main className="size-full">
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container size="xs" className="my-20">
        <Flex direction="column" align="center" gap="2.25">
          <Text weight="bold" size="32">
            채널 생성하기
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
                      <ChannelCategorySelect.Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <ChannelCategorySelect.SelectTrigger>
                            <ChannelCategorySelect.SelectValue placeholder="팝업스토어" />
                          </ChannelCategorySelect.SelectTrigger>
                        </FormControl>
                        <ChannelCategorySelect.SelectContent channelCategory={data.data ?? []} />
                      </ChannelCategorySelect.Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactEmail"
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
                  <Button fullWidth type="submit" disabled={!form.formState.isValid}>
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
