import { FC } from 'react';

import { ActionEmail } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';

export const SendReservationTicketButton: FC = () => {
  // @TODO: do api call here, maybe input parameter is differ by tab
  // @PLAN: disable button when there is selected personnel
  const selectedPersonnel: number = 1;
  const disabled = selectedPersonnel === 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Flex gap="0.5" asChild>
          <Button disabled={disabled}>
            <ActionEmail />
            <Text weight="bold">예약 티켓 보내기</Text>
          </Button>
        </Flex>
      </DialogTrigger>
      <DialogContent>
        <Flex direction="column" gap="2">
          <DialogTitle>
            <Flex justify="center" asChild>
              <Text size="20" weight="semibold" color="slate/900">
                예약 티켓 보내기 모달
              </Text>
            </Flex>
          </DialogTitle>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
