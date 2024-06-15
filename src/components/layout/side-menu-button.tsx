import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';

import { Flex } from '../ui/flex';

export const SideMenuButton: FC<
  PropsWithChildren<{
    className?: string;
    selected?: boolean;
  }>
> = ({ className, children, selected }) => {
  // It is button, but shape is like children, so delegate button prop to child using asChild

  return (
    <Flex gap="0.5" align="center" className="w-full" asChild>
      <Button
        variant="ghost"
        className={cx('h-auto cursor-pointer whitespace-normal p-2 text-left', className)}
        selected={selected}
      >
        {children}
      </Button>
    </Flex>
  );
};
