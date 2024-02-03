import Link from 'next/link';
import { FC } from 'react';

import { BrandLogo } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

const Skeleton: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <Flex align="center" asChild>
      <nav className="h-16 border-b border-b-gray-100 bg-white px-2 py-[6px]">
        <Flex justify="between" className="w-full">
          <Flex align="center" gap="0.5" asChild>
            <Link href="/">
              <BrandLogo />
              <Text size="20" weight="bold" color="gray/600">
                EventFairy
              </Text>
            </Link>
          </Flex>
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
        <Link href="https://tally.so/r/3lrqD5">
          <Text weight="medium" size="14">
            사전 예약 신청
          </Text>
        </Link>
      </Button>
    </Skeleton>
  );
};

export { Skeleton, Make };
