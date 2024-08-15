import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Flex } from '@/components/ui/flex';
import { Literal } from '@/components/ui/literal';
import { Text } from '@/components/ui/text';

export const Ticket: FC<{
  ticketName: string;
  preview?: string;
  //   @TODO: add more as api is updated
}> = ({ ticketName, preview }) => {
  return (
    <Flex className="h-auto w-[390px] rounded-lg px-6 pb-8 shadow-lg" direction="column" gap="2">
      <Flex className="h-[54px]" justify="between" align="center">
        <Flex>
          <Text>9:41</Text>
        </Flex>
        <Flex>
          <Text>Icons</Text>
        </Flex>
      </Flex>
      <Avatar className="relative h-[469px] w-[342px] rounded-lg">
        <AvatarImage src={preview} className="rounded-none" />
        <AvatarFallback className="rounded-none" />
        <Flex
          className="absolute inset-x-0 bottom-0 rounded-b-lg bg-gradient-to-t from-black to-transparent px-6 pb-6 pt-16"
          justify="end"
        >
          <Text className="w-full break-words" size="16" weight="medium" color="white">
            {ticketName || ''}
          </Text>
        </Flex>
      </Avatar>
      <Flex direction="column" justify="center" align="center" gap="1">
        <Flex>
          {/* @TODO: add qr code generator */}
          <Text>QR Code</Text>
        </Flex>
        <Flex>
          <Flex>
            <Text size="16" align="center" color="gray/500">
              2023.10.08(토)
            </Text>
            <Literal.Space />
            <Text size="16" align="center" color="primary">
              12:00 ~ 18:00
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Text size="14" color="gray/500" weight="medium">
            예약ID : 1234567890
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
