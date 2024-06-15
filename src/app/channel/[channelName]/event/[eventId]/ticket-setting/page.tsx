'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { RedirectType } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { TicketImageUploadFormItem } from '@/components/common/form/ticket-image-upload';
import { IconlySharpBoldNotification } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Ticket } from '@/components/ui/ticket';
import { useToast } from '@/components/ui/use-toast';
import { ChannelName, EventId } from '@/const/router';
import { createImageURL } from '@/lib/file';
import { typedRedirect } from '@/lib/nextjs/server-navigation';
import { CommonNextPageProps } from '@/lib/nextjs/type';

const formSchema = z.object({
  name: z.string().min(1, {
    message: '예약 티켓 이름을 입력해주세요.',
  }),
  ticketImageFile: z.instanceof(FileList).refine(
    (fileList) => {
      return fileList.length > 0;
    },
    {
      message: '티켓 이미지를 선택해주세요.',
    },
  ),
});

type TicketManagementForm = z.infer<typeof formSchema>;

const EventTicketSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId } }) => {
  const { toast } = useToast();
  const form = useForm<TicketManagementForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const ticketName = form.watch('name');
  const fileImage = form.watch('ticketImageFile');

  // Redirect to channel page if channelName is not provided
  if (!channelName) {
    typedRedirect('/channel', RedirectType.replace);
    return null;
  }

  // Redirect to channel/event page if channelName is exist but there is no eventId
  if (!eventId) {
    typedRedirect(`/channel/${channelName}`, RedirectType.replace);
    return null;
  }

  const onSubmit = (values: TicketManagementForm) => {
    // Option1: presigned url을 받아서 직접 업로드
    // Option2: 서버에 multipart/form-data로 전송
    toast({
      title: 'Need to implement',
      description: JSON.stringify(values),
    });
  };

  return (
    <Flex direction="column" gap="2.25" asChild>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <Flex direction="column" gap="2.25">
                <Flex direction="column" gap="0.5">
                  <Text size="32" weight="bold" color="gray/900">
                    예약 티켓 관리
                  </Text>
                  <Text size="16" weight="medium" color="gray/500">
                    예약자들이 이벤트에 참여하기 위한 예약 티켓이 필요합니다.
                  </Text>
                </Flex>
                <Flex justify="start" align="center" gap="0.5" asChild>
                  <Label className="border-none bg-primary-50 p-6">
                    <IconlySharpBoldNotification size="24" color="black" />
                    <Text size="16" weight="medium" color="black">
                      예약 티켓에 관한 설명
                    </Text>
                  </Label>
                </Flex>
              </Flex>
            </CardHeader>
            <CardContent>
              <Flex className="px-2" gap="2">
                <Ticket
                  ticketName={ticketName}
                  preview={fileImage && fileImage[0] && createImageURL(fileImage[0])}
                />
                <Flex className="w-full" direction="column" gap="2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel required>예약 티켓 이름</FormLabel>
                        <FormControl>
                          <Input placeholder="예약 티켓 이름을 입력해주세요." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ticketImageFile"
                    render={({ field }) => (
                      <TicketImageUploadFormItem
                        field={field}
                        formLabel={{
                          required: true,
                          children: '티켓 이미지 선택',
                        }}
                      />
                    )}
                  />
                </Flex>
              </Flex>
            </CardContent>
            <CardFooter justify="end">
              <Button type="submit" disabled={!form.formState.isValid}>
                저장하기
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </Flex>
  );
};

export default EventTicketSettingPage;
