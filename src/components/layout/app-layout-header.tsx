import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { FC } from 'react';

import { BrandLogo } from '@/components/common/icon';

import { Button } from '../ui/button';

const Skeleton: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <Flex align="center" asChild>
      <nav className="h-16 border-b border-b-gray-100 bg-white px-2 py-[6px]">
        <Flex justify="between" className="w-full">
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo />
            <span className="font-sourceSansPro text-xl font-semibold text-primary">ChakChak</span>
          </Link>
          {children}
        </Flex>
      </nav>
    </Flex>
  );
};

const Make = () => {
  return (
    <Skeleton>
      <Button asChild>
        <Link href="https://tally.so/r/3lrqD5">사전 예약 신청</Link>
      </Button>
    </Skeleton>
  );
};

export { Skeleton, Make };
