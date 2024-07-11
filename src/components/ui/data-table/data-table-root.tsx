import { ComponentPropsWithoutRef, FC } from 'react';

import { Table } from '@/components/ui/table';

type DataTableRootProps = ComponentPropsWithoutRef<typeof Table>;

export const DataTableRoot: FC<DataTableRootProps> = (props) => {
  return <Table {...props} />;
};
