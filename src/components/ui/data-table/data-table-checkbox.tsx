import { Row, Table } from '@tanstack/react-table';
import { ComponentPropsWithoutRef } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

type CheckboxProps = ComponentPropsWithoutRef<typeof Checkbox>;

const DataTableHeaderCheckbox = <TData,>({
  table,
  rounded = 'sm',
  size = '1',
  ...rest
}: { table: Table<TData> } & CheckboxProps) => {
  return (
    <Checkbox
      checked={table.getIsAllRowsSelected() || (table.getIsSomeRowsSelected() && 'indeterminate')}
      onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      aria-label="Select all"
      rounded={rounded}
      size={size}
      {...rest}
    />
  );
};

const DataTableCellCheckbox = <TData,>({
  row,
  rounded = 'sm',
  size = '1',
  ...rest
}: { row: Row<TData> } & CheckboxProps) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      rounded={rounded}
      size={size}
      {...rest}
    />
  );
};

export const DataTableCheckbox = {
  Header: DataTableHeaderCheckbox,
  Cell: DataTableCellCheckbox,
};
