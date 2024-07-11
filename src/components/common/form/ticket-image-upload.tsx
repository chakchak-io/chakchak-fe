'use client';

import { ChangeEvent } from 'react';
import { ControllerRenderProps, Path } from 'react-hook-form';

import { ActionPlusCircle } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

// @TODO: make it util
function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image));

  const files = dataTransfer.files;

  return { files };
}

export const TicketImageUploadFormItem = <
  TFieldValues extends {
    ticketImageFile: FileList;
  },
  TName extends Path<TFieldValues>,
>({
  field,
  formLabel,
}: {
  field: ControllerRenderProps<TFieldValues, TName>;
  formLabel: React.ComponentPropsWithoutRef<typeof FormLabel>;
}) => {
  const { onChange, name, value: _value, ...rest } = field;
  return (
    <FormItem>
      <FormLabel {...formLabel} />
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
            const { files } = getImageData(e);
            onChange(files);
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
