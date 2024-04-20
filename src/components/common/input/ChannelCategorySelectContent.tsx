'use client';
import { UseFormReturn } from 'react-hook-form';

import { ChannelCategorySelect } from '@/components/common/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useSupabaseBrowser } from '@/hooks';
import { useChannelCategoriesQuery } from '@/hooks/channel';

import SSRSafeSuspense from '../SSRSafeSuspense';

const ChannelCategorySelectContent = ({
  form,
}: {
  form: UseFormReturn<
    {
      channelName: string;
      category: string;
      contactEmail: string;
    },
    any,
    undefined
  >;
}) => {
  const supabase = useSupabaseBrowser();
  const { data, error, isLoading } = useChannelCategoriesQuery(supabase);

  if (error) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel required>채널 카테고리를 선택해주세요.</FormLabel>
          <ChannelCategorySelect.Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <ChannelCategorySelect.SelectTrigger>
                <ChannelCategorySelect.SelectValue placeholder="팝업스토어" />
              </ChannelCategorySelect.SelectTrigger>
            </FormControl>
            <SSRSafeSuspense fallback={<div>Loading...</div>}>
              <ChannelCategorySelect.SelectContent channelCategory={data.data ?? []} />
            </SSRSafeSuspense>
          </ChannelCategorySelect.Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ChannelCategorySelectContent;
