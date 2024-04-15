'use client';
import { useSearchParams } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useSupabaseBrowser } from '@/hooks';
import { useChannelCategoriesQuery } from '@/hooks/channel';

import { ChannelCategorySelect } from './ChannelCategorySelect';

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
  const something = useSearchParams(); //FIXME: This can be statically optimized.
  console.log(something);
  const { data, error, isLoading } = useChannelCategoriesQuery(supabase);

  if (error) return <div>failed to load data</div>;
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
