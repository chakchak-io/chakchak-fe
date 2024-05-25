import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  parkingAvailable: z.enum(['true', 'false']),
  isFree: z.enum(['true', 'false']),
  locationName: z.string().min(1, {
    message: '장소 이름을 입력해주세요',
  }),
  locationAddress: z.string().min(1, {
    message: '장소 주소를 입력해주세요',
  }),
  locationDescription: z.string().optional(),
});

type DefaultSettingForm = z.infer<typeof defaultSettingSchema>;

export const DefaultSettingTabContent = () => {
  const { toast } = useToast();

  // @TODO: do api call here for getting default setting value
  const defaultValues: DefaultSettingForm = {
    eventName: '이벤트페어리 팝업스토어',
    eventDescription:
      '성수동에서 열리는 이벤트페어리 팝업스토어입니다. 다양한 이벤트가 준비되어 있어요.',
    eventCaution: '계단이 많아요.',
    referenceSite: 'https://eventfairy.com',
    parkingAvailable: 'true',
    isFree: 'true',
    locationName: '엄청난 이벤트장소',
    locationAddress: '서울시 강남구 역삼동 123-456',
    locationDescription: '엄청난 이벤트장소 설명',
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
              name="parkingAvailable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>
                    <Text weight="medium" size="14" color="slate/900">
                      주차가능 여부
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Flex gap="3.5" asChild>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                        <FormItem direction="row" align="center" gap="0.5" className="w-20">
                          <FormControl>
                            <RadioGroupItem value="true" />
                          </FormControl>
                          <FormLabel>
                            <Text weight="medium" size="16" color="gray/900">
                              주차가능
                            </Text>
                          </FormLabel>
                        </FormItem>
                        <FormItem direction="row" align="center" gap="0.5">
                          <FormControl>
                            <RadioGroupItem value="false" />
                          </FormControl>
                          <FormLabel>
                            <Text weight="medium" size="16" color="gray/900">
                              주차불가
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
            <Flex gap="1">
              <FormField
                control={form.control}
                name="locationName"
                render={({ field }) => (
                  <FormItem className="basis-1/2">
                    <FormLabel required>장소이름</FormLabel>
                    <FormControl>
                      <Input placeholder="채널 이름을 입력해주세요." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="locationAddress"
                render={({ field }) => (
                  <FormItem className="basis-1/2">
                    <FormLabel required>
                      <Text weight="medium" size="14" color="slate/900">
                        상세주소
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
          </Flex>
          <Flex direction="column">
            <FormField
              control={form.control}
              name="locationDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Text weight="medium" size="14" color="slate/900">
                      장소 설명
                    </Text>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="장소에 대한 설명을 적어주세요."
                      className="h-[6.5rem] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
