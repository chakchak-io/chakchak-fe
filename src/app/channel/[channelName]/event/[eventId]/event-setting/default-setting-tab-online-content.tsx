import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { StreamingServiceSelect } from '@/components/common/input';
import { Button } from '@/components/ui/button';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

import { useEventPageContext } from './event-page-context';

// form validations
const defaultSettingSchema = z.object({
  eventName: z.string().min(1, {
    message: '이벤트 이름을 입력해주세요',
  }),
  eventDescription: z.string().min(1, {
    message: '이벤트 설명을 입력해주세요',
  }),
  eventCaution: z.string().optional(),
  referenceSite: z.string().optional(),
  isFree: z.enum(['true', 'false']),
  streamingService: z.enum(StreamingServiceSelect.data),
});

type DefaultSettingForm = z.infer<typeof defaultSettingSchema>;

export const DefaultSettingTabOnlineContent = () => {
  const { toast } = useToast();
  const { onCurrentTabDirtyChange } = useEventPageContext('default-setting-tab-content');

  // @TODO: do api call here for getting default setting value
  const defaultValues: DefaultSettingForm = {
    eventName: '이벤트페어리 온라인 이벤트',
    eventDescription: '완벽한 온라인 이벤트를 준비했습니다. 많은 참여 부탁드립니다.',
    eventCaution: '이벤트 참여 시 주의사항을 꼭 확인해주세요.',
    referenceSite: 'https://eventfairy.com',
    isFree: 'true',
    streamingService: 'Google meet',
  };

  const form = useForm<DefaultSettingForm>({
    mode: 'all',
    resolver: zodResolver(defaultSettingSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (values: DefaultSettingForm) => {
    toast({
      title: 'Need to implement',
      description: JSON.stringify(values),
    });
  };

  useEffect(() => {
    // update dirty state to show unsaved changes alert
    onCurrentTabDirtyChange(form.formState.isDirty);
  }, [form.formState.isDirty, onCurrentTabDirtyChange]);

  return (
    <Form {...form}>
      <Flex direction="column" gap="2" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Flex direction="column" gap="2.25">
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>
                    <Text weight="medium" size="14" color="slate/900">
                      이벤트 이름
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="이벤트페어리 팝업스토어" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>
                    <Text weight="medium" size="14" color="slate/900">
                      이벤트 상세정보
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="이벤트 상세정보를 적어주세요."
                      className="h-[13.5rem] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventCaution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Text weight="medium" size="14" color="slate/900">
                      주의사항
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="이벤트에 주의사항이 있으면 알려주세요."
                      className="h-[9.75rem] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>
          <Flex direction="column">
            <FormField
              control={form.control}
              name="referenceSite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Text weight="medium" size="14" color="slate/900">
                      참고 사이트
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="참고 사이트를 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>
          <Flex direction="column">
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>
                    <Text weight="medium" size="14" color="slate/900">
                      유, 무료 여부
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Flex gap="3.5" asChild>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                        <FormItem direction="row" align="center" gap="0.5" className="w-20">
                          <FormControl>
                            <RadioGroupItem value="true" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <Text weight="medium" size="16" color="gray/900">
                              유료
                            </Text>
                          </FormLabel>
                        </FormItem>
                        <FormItem direction="row" align="center" gap="0.5">
                          <FormControl>
                            <RadioGroupItem value="false" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <Text weight="medium" size="16" color="gray/900">
                              무료
                            </Text>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </Flex>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>
          <Flex direction="column">
            <Flex>
              <FormField
                control={form.control}
                name="streamingService"
                render={({ field }) => (
                  <FormItem className="basis-1/2">
                    <FormLabel required>스트리밍 서비스를 선택해주세요</FormLabel>
                    <StreamingServiceSelect.Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <StreamingServiceSelect.SelectTrigger>
                          <StreamingServiceSelect.SelectValue placeholder="송출하실 스트리밍 서비스를 선택해주세요." />
                        </StreamingServiceSelect.SelectTrigger>
                      </FormControl>
                      <StreamingServiceSelect.SelectContent />
                    </StreamingServiceSelect.Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>
          </Flex>
          <Separator />
          <Flex justify="end">
            <Button type="submit" disabled={!form.formState.isValid}>
              저장
            </Button>
          </Flex>
        </form>
      </Flex>
    </Form>
  );
};
