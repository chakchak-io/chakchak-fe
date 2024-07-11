import { O } from '@mobily/ts-belt';
import { format } from 'date-fns';
import { FC, Suspense, useState } from 'react';
import { match, P } from 'ts-pattern';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const TimeSelectCard: FC<{
  time: Date;
  total: number;
  reserved: number;
  selected?: boolean;
  onClick?: (time: Date) => void;
}> = ({ time, total, reserved, selected = false, onClick }) => {
  return (
    // @TODO: make it variant of button, if possible
    <Flex direction="column" asChild>
      <Button
        variant="outline"
        className={cn(
          'h-[52px] w-auto px-4 py-1 hover:border-primary hover:bg-primary/10 hover:text-primary',
          selected && 'bg-primary/10 text-primary',
        )}
        onClick={() => onClick && onClick(time)}
      >
        <Text>{format(time, 'HH:mm')}</Text>
        <Text>
          {reserved}/{total}명
        </Text>
      </Button>
    </Flex>
  );
};

const TimeSelectArea: FC<{
  date: string;
}> = ({ date }) => {
  // @FIXME: should we need to remember selected time too?
  const [selectedTime, setSelectedTime] = useState<O.Option<Date>>(O.None);
  return (
    <Flex gap="1.5">
      {Array.from({ length: 12 }, (_, i) => {
        const time = new Date(new Date(date).setHours(9 + i, 0, 0, 0));
        return (
          <TimeSelectCard
            key={i}
            time={time}
            total={10}
            reserved={5}
            selected={O.isNone(selectedTime) ? false : selectedTime.getTime() === time.getTime()}
            onClick={(time) => {
              setSelectedTime(time);
            }}
          />
        );
      })}
    </Flex>
  );
};

export const TimeSelectSection: FC<{
  date: O.Option<string>;
}> = ({ date }) => {
  return (
    <Flex className={cn((!date || date === '') && 'hidden', 'h-[52px] w-full overflow-hidden')}>
      <Suspense
        fallback={
          <Flex gap="1">
            <Skeleton className="h-full w-[100px]" />
            <Skeleton className="h-full w-[100px]" />
            <Skeleton className="h-full w-[100px]" />
            <Skeleton className="h-full w-[100px]" />
            <Skeleton className="h-full w-[100px]" />
            <Skeleton className="h-full w-[100px]" />
          </Flex>
        }
      >
        <ScrollArea className="size-full">
          {match(date)
            .with(P.nullish, '', () => null)
            .with(P.string, (date) => <TimeSelectArea date={date} />)
            .exhaustive()}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Suspense>
    </Flex>
  );
};
