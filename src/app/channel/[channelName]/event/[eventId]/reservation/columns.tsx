'use client';

import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { match } from 'ts-pattern';

import { ReservedPersonnelDeleteAlertButton } from './reserved-personnel-delete-alert-button';
import { StatusSelect } from './status-select';

export type Reservation = {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  gender: 'male' | 'female';
  status: 'in-progress' | 'pending' | 'end';
};

const columnHelper = createColumnHelper<Reservation>();

export const reservationColumns: ColumnDef<Reservation, any>[] = [
  columnHelper.display({
    id: 'No',
    header: 'No',
    cell: ({ row }) => row.index + 1,
  }),
  columnHelper.accessor('name', {
    header: '이름',
  }),
  columnHelper.accessor('phoneNumber', {
    header: '휴대폰',
  }),
  columnHelper.accessor('email', {
    header: '이메일',
    cell: ({ row }) => row.original.email ?? '-',
  }),
  columnHelper.accessor('gender', {
    header: '성별',
    cell: ({ row }) =>
      match(row.original.gender)
        .with('male', () => '남자')
        .with('female', () => '여자')
        .exhaustive(),
  }),
  columnHelper.accessor('status', {
    header: '상태',
    size: 200,
    cell: ({ row }) => <StatusSelect status={row.original.status} />,
  }),
  columnHelper.display({
    id: 'delete',
    header: '삭제',
    cell: ({ row }) => <ReservedPersonnelDeleteAlertButton row={row} />,
  }),
];
