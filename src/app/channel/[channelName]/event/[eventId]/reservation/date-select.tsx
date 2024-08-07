import { O } from '@mobily/ts-belt';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Flex } from '@/components/ui/flex';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { createQueryString } from '@/lib/string';
import { cn } from '@/lib/utils';

export const DateSelect: FC<{
  date: O.Option<string>;
  placeholder?: string;
}> = ({ date, placeholder = '날짜를 선택해주세요' }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Flex gap="0.5" align="center" asChild>
          <Button size="default" variant="outline" className={cn('w-[240px]')}>
            {/* @TODO: maybe change to icon at design system */}
            <CalendarIcon className="size-4" />
            {/* @TODO: make it detect locale */}
            <Text size="16" weight="medium">
              {date
                ? format(date, 'yyyy-MM-dd(EEE)', {
                    locale: ko,
                  })
                : placeholder}
            </Text>
          </Button>
        </Flex>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date ? new Date(date) : undefined}
          onSelect={(date) => {
            replace(
              pathname +
                '?' +
                createQueryString(searchParams, 'date', date ? date.toISOString() : ''),
              {
                scroll: false,
              },
            );
          }}
          //   @TODO: change to plan
          disabled={(date) => date < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
