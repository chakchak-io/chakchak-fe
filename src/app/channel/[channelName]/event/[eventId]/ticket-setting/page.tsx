'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { RedirectType } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ActionPlusCircle, IconlySharpBoldNotification } from '@/components/common/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Literal } from '@/components/ui/literal';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { ChannelName, EventId } from '@/const/router';
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

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0] as Blob);

  return { files, displayUrl };
}

const EventTicketSettingPage: NextPage<
  CommonNextPageProps<{
    channelName: ChannelName;
    eventId: EventId;
  }>
> = ({ params: { channelName, eventId } }) => {
  const { toast } = useToast();
  const [preview, setPreview] = useState<string>();
  const form = useForm<TicketManagementForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const ticketName = form.watch('name');

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
                <Flex
                  className="h-auto w-[390px] rounded-lg px-6 pb-8 shadow-lg"
                  direction="column"
                  gap="2"
                >
                  <Flex className="h-[54px]" justify="between" align="center">
                    <Flex>
                      <Text>9:41</Text>
                    </Flex>
                    <Flex>
                      <Text>Icons</Text>
                    </Flex>
                  </Flex>
                  <Avatar className="relative h-[469px] w-[342px] rounded-lg">
                    <AvatarImage src={preview} className="rounded-none" />
                    <AvatarFallback className="rounded-none" />
                    <Flex
                      className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent px-6 pb-6 pt-16"
                      justify="end"
                    >
                      <Text className="w-full break-words" size="16" weight="medium" color="white">
                        {ticketName || ''}
                      </Text>
                    </Flex>
                  </Avatar>
                  <Flex direction="column" justify="center" align="center" gap="1">
                    <Flex>
                      {/* @TODO: add qr code generator */}
                      <Text>QR Code</Text>
                    </Flex>
                    <Flex>
                      <Flex>
                        <Text size="16" align="center" color="gray/500">
                          2023.10.08(토)
                        </Text>
                        <Literal.Space />
                        <Text size="16" align="center" color="primary">
                          12:00 ~ 18:00
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Text size="14" color="gray/500" weight="medium">
                        예약ID : 1234567890
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
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
                    render={({ field: { onChange, name, value: _value, ...rest } }) => (
                      <FormItem>
                        <FormLabel required>티켓 이미지 선택</FormLabel>
                        <FormLabel className="inline-flex max-w-[300px] cursor-pointer">
                          <Button
                            variant="outline"
                            className="pointer-events-none size-auto border border-gray-200 bg-gray-50 px-14 py-9"
                          >
                            <Flex align="center" direction="column" gap="0.5">
                              <Flex>
                                <ActionPlusCircle size="32" />
                              </Flex>
                              <Flex direction="column" gap="0.25">
                                <Text size="18" weight="semibold" color="black">
                                  티켓 이미지 업로드
                                </Text>
                                <Text size="16" weight="medium" color="gray/500">
                                  권장 사이즈 : 342 x 469 px
                                </Text>
                              </Flex>
                            </Flex>
                          </Button>
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="hidden"
                            type="file"
                            name={name}
                            placeholder="예약 티켓 이름을 입력해주세요."
                            {...rest}
                            onChange={(e) => {
                              const { files, displayUrl } = getImageData(e);
                              setPreview(displayUrl);
                              onChange(files);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
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
