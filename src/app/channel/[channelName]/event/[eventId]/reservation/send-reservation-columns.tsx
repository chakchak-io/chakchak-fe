'use client';

import { faker } from '@faker-js/faker';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { DataTableCheckbox } from '@/components/ui/data-table/data-table-checkbox';

export type SendReservation = {
  id: string;
  name: string;
  phoneNumber: string;
  mailSent: boolean;
};

const columnHelper = createColumnHelper<SendReservation>();

export const sendReservationColumns: ColumnDef<SendReservation, any>[] = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => <DataTableCheckbox.Header table={table} />,
    cell: ({ row }) => <DataTableCheckbox.Cell row={row} />,
    enableResizing: false,
    enableSorting: false,
    enableHiding: false,
  }),
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
  columnHelper.accessor('mailSent', {
    header: '발송 여부',
    cell: ({ row }) => (row.original.mailSent ? '발송' : '미발송'),
  }),
];

// @TODO: remove mock data
export const createRandomSendReservation = (): SendReservation => {
  return {
    id: faker.string.uuid(),
    // incremental number
    name: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    mailSent: Math.random() > 0.5,
  };
};
