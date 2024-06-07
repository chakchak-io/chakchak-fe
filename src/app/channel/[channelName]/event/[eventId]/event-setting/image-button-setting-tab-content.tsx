import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronDown } from 'lucide-react';
import { SketchPicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { TicketImageUploadFormItem } from '@/components/common/form/ticket-image-upload';
import { IconlySharpBoldNotification } from '@/components/common/icon';
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
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  // @TODO: validate color
  buttonColor: z
    .string()
    .min(1)
    .regex(/^#[0-9a-fA-F]{6}$/),
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

export const ImageButtonSettingTabContent = () => {
  const { toast } = useToast();
  const form = useForm<TicketManagementForm>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      buttonColor: '#8A2BE2',
    },
  });

  const onSubmit = (values: TicketManagementForm) => {
    // Option1: presigned url을 받아서 직접 업로드
    // Option2: 서버에 multipart/form-data로 전송
    toast({
      title: 'Need to implement',
      description: JSON.stringify(values),
    });
  };

  return (
    <Form {...form}>
      <Flex direction="column" gap="2" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Flex justify="start" align="center" gap="0.5" asChild>
            <Label className="border-none bg-primary-50 p-6">
              <IconlySharpBoldNotification size="24" color="black" />
              <Text size="16" weight="medium" color="black">
                예약 티켓에 관한 설명
              </Text>
            </Label>
          </Flex>
          <Flex direction="column">
            <Flex className="px-2" gap="2">
              <Flex className="w-full" direction="column" gap="2">
                <FormField
                  control={form.control}
                  name="ticketImageFile"
                  render={({ field }) => (
                    <TicketImageUploadFormItem
                      field={field}
                      formLabel={{
                        required: true,
                        children: '배너 이미지',
                      }}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="buttonColor"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel required>버튼 컬러 선택</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn('w-[240px] justify-between')}
                            >
                              <Flex gap="0.25" align="center">
                                <span
                                  className="size-7 rounded-full"
                                  style={{ backgroundColor: field.value ?? 'transparent' }}
                                />
                                <Text size="16" weight="medium">
                                  {field.value ?? 'Select Color'}
                                </Text>
                              </Flex>
                              <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <SketchPicker
                            color={field.value}
                            onChangeComplete={(color) => {
                              form.setValue('buttonColor', color.hex);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Flex>
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
