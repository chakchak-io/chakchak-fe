'use client';

import * as Select from '@/components/ui/select';
import { channelCategory } from '@/const/channel-category';
import { ChannelCategoryData } from '~/types/ChannelCategories';

const { SelectContent: OriginalSelectContent, ...rest } = Select;

// @PLAN: plan reflected select
interface Props {
  channelCategory: ChannelCategoryData[];
}

const SelectContent = ({ channelCategory }: Props) => {
  return (
    <OriginalSelectContent>
      {/* @TODO: global css의 accent color 수정 필요.
      단, accent-color foreground의 쓰임세를 몰라 당장 수정하지 않음.
    */}
      {channelCategory.map((option) => (
        <Select.SelectItem key={`channel-category-option-` + option.id} value={option.name}>
          {option.display_name}
        </Select.SelectItem>
      ))}
    </OriginalSelectContent>
  );
};

export const ChannelCategorySelect = {
  SelectContent,
  ...rest,
  data: channelCategory,
};
