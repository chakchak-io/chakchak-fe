'use client';

import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import React from 'react';
import { match } from 'ts-pattern';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import { Literal } from '@/components/ui/literal';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';

export type Event = {
  id: string;
  no: number;
  title: string;
  startDate: string;
  appointment: {
    current: number;
    max: number;
  };
  status: 'pending' | 'in-progress' | 'end';
};

const columnHelper = createColumnHelper<Event>();

export const eventColumns: ColumnDef<Event, any>[] = [
  columnHelper.accessor('no', {
    header: 'No',
  }),
  columnHelper.accessor('title', {
    header: '이벤트',
  }),
  columnHelper.accessor('startDate', {
    header: '이벤트 시작일시',
    cell: ({ row }) => (
      <>
        {format(row.original.startDate, 'yyyy년 MM월 dd일(E) HH:mm', {
          locale: ko,
        })}
      </>
    ),
  }),
  columnHelper.accessor('appointment', {
    header: '예약자 현황',
    cell: ({ row }) => (
      <Flex direction="column" gap="0.5">
        <Label>
          <Text size="14" weight="medium">
            {row.original.appointment.current}
          </Text>
          <Literal.Space />
          /<Literal.Space />
          <Text color="primary" size="14" weight="semibold">
            {row.original.appointment.max}명
          </Text>
        </Label>
        <Progress value={66} className="h-2 w-full" />
      </Flex>
    ),
  }),
  columnHelper.accessor('status', {
    header: '상태',
    cell: ({ row }) => (
      <Button fullWidth variant="outline" className="pointer-events-none">
        <Text weight="semibold" size="16" color="gray/500">
          {match(row.original.status)
            .with('in-progress', () => '대기 중')
            .with('pending', () => '진행 중')
            .with('end', () => '완료됨')
            .exhaustive()}
        </Text>
      </Button>
    ),
  }),
];
