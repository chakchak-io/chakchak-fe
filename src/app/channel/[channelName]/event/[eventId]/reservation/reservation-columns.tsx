'use client';

import { faker } from '@faker-js/faker';
import { O } from '@mobily/ts-belt';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { match, P } from 'ts-pattern';

import { ReservedPersonnelDeleteAlertButton } from './reserved-personnel-delete-alert-button';
import { StatusSelect } from './status-select';

export type Reservation = {
  id: string;
  name: string;
  phoneNumber: string;
  email: O.Option<string>;
  gender: O.Option<'male' | 'female'>;
  status: 'attended' | 'pending' | 'not-attended';
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
        .with(P.nullish, () => '-')
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

// @TODO: remove mock data
export const createRandomReservation = (): Reservation => {
  return {
    id: faker.string.uuid(),
    // incremental number
    name: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    email: faker.helpers.maybe(faker.internet.email, {
      probability: 0.5,
    }),
    gender: faker.helpers.arrayElement<O.Option<'male' | 'female'>>(['male', 'female', O.None]),
    status: faker.helpers.arrayElement<'attended' | 'not-attended' | 'pending'>([
      'attended',
      'not-attended',
      'pending',
    ]),
  };
};
