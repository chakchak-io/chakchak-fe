import { flexRender, Table } from '@tanstack/react-table';

import { TableHead, TableHeader, TableRow } from '../table';

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
}

export const DataTableHeader = <TData,>({ table }: DataTableHeaderProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};
