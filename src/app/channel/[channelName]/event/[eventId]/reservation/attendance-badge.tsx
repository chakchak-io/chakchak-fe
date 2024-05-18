import React, { FC, memo } from 'react';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

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

export const AttendanceBadge: FC<{
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
