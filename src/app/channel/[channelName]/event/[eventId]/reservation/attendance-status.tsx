import React, { FC, memo } from 'react';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import { Reservation } from './reservation-columns';

type BadgeType = 'attended' | 'pending' | 'not-attended';

const Badge: FC<{
  type: BadgeType;
}> = memo(({ type }) => {
  return (
    <Flex
      display="inline-flex"
      className={cn(
        'size-2 rounded-full',
        match(type)
          .with('attended', () => 'bg-positive')
          .with('pending', () => 'bg-amber-200')
          .with('not-attended', () => 'bg-danger')
          .exhaustive(),
      )}
    />
  );
});
Badge.displayName = 'appointment-badge';

const AttendanceBadge: FC<{
  badge?: 'attended' | 'pending' | 'not-attended';
  text: string;
  count: number;
}> = ({ badge, text, count }) => {
  return (
    <Flex gap="0.25" align="center">
      {badge && <Badge type={badge} />}
      <Text size="14" weight="medium" color="gray/500">
        {text}
      </Text>
      <Text size="14" weight="medium" color="gray/500">
        {count}
      </Text>
    </Flex>
  );
};

export const AttendanceStatus: FC<{
  // @TODO: remove it and replace to api
  reservations: Reservation[];
}> = ({ reservations }) => {
  // @TODO: do api call here
  const attendedCount = reservations.filter((r) => r.status === 'attended').length;
  const notAttendedCount = reservations.filter((r) => r.status === 'not-attended').length;
  const pendingCount = reservations.filter((r) => r.status === 'pending').length;
  const totalCount = reservations.length;
  return (
    <Flex gap="1.5" className="mt-1.5">
      <AttendanceBadge text="전체" count={totalCount} />
      <AttendanceBadge text="참여대기" count={pendingCount} badge="pending" />
      <AttendanceBadge text="참여완료" count={attendedCount} badge="attended" />
      <AttendanceBadge text="미참석" count={notAttendedCount} badge="not-attended" />
    </Flex>
  );
};
