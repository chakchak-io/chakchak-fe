import { cva, VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { AppLayout } from '@/components/layout';

import { Container } from '../ui/container';
import { Flex } from '../ui/flex';

const pageLayout = cva('flex flex-col');

type pageLayoutVariant = VariantProps<typeof pageLayout>;

const Skeleton: FC<
  PropsWithChildren<
    {
      className?: string;
    } & pageLayoutVariant
  >
> = ({ children }) => {
  return <Flex direction="row">{children}</Flex>;
};

const Make: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Skeleton>
      <AppLayout.SideMenu.Make />
      <Container className="min-h-screen bg-gray-100 pt-14">{children}</Container>
    </Skeleton>
  );
};

export { Skeleton, Make };
