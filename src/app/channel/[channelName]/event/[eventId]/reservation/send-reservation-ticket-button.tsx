import { A, O } from '@mobily/ts-belt';
import { X } from 'lucide-react';
import { FC, useMemo } from 'react';

import { ActionEmail, IconlySharpBoldNotification } from '@/components/common/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import { Label } from '@/components/ui/label';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Text } from '@/components/ui/text';
import { Ticket } from '@/components/ui/ticket';

import { DateSelect } from './date-select';
import { createRandomSendReservation, sendReservationColumns } from './send-reservation-columns';

export const SendReservationTicketButton: FC<{
  date: O.Option<string>;
}> = ({ date }) => {
  // @TODO: do api call here, maybe input parameter is differ by tab
  // @PLAN: disable button when there is selected personnel
  const selectedPersonnel: number = 1;
  const disabled = selectedPersonnel === 0;

  const sendReservations = useMemo(
    () => Array.from({ length: 40 }, () => createRandomSendReservation()),
    [],
  );

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
      <DialogContent className="h-[800px] max-w-max">
        <DialogHeader>
          <DialogTitle>
            <Flex direction="column" gap="1.5">
              <Flex direction="column" gap="0.5">
                <Text size="24" weight="bold" color="gray/900">
                  예약 티켓 보내기
                </Text>
              </Flex>
            </Flex>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full">
          <Flex direction="column" gap="1.5" className="mb-8">
            <Flex justify="start" align="center" gap="0.5" asChild className="sticky top-0 z-[100]">
              <Label className="border-none bg-primary-50 p-6">
                <IconlySharpBoldNotification size="24" color="black" />
                <Text size="16" weight="medium" color="black">
                  예약 티켓에 관한 설명
                </Text>
              </Label>
            </Flex>
            <Flex direction="column" gap="2">
              <Flex className="px-2" gap="3.5">
                {/* @TODO: add appropriate data */}
                <Ticket
                  ticketName="이벤트페어리 강남주식회사 이벤트 시작하자"
                  preview={undefined}
                />
                <DataTable.Provider columns={sendReservationColumns} data={sendReservations}>
                  {({ table, columns }) => {
                    const selectedPersonnel = A.map(
                      table.getSelectedRowModel().rows,
                      (row) => row.original,
                    );
                    const selectedNumber = selectedPersonnel.length;
                    const total = table.getCoreRowModel().rows.length;

                    return (
                      <Flex className="w-full" direction="column" gap="1.5">
                        <Flex gap="1" align="center">
                          <Text size="16" weight="medium" wrap="nowrap">
                            받는 사람
                          </Text>
                          <Button
                            variant="outline"
                            className="cursor-default justify-between hover:bg-transparent"
                            fullWidth
                          >
                            {selectedPersonnel.length > 0 ? (
                              <Flex gap="0.25" asChild>
                                <Badge>
                                  {selectedPersonnel.length > 1
                                    ? `${A.head(selectedPersonnel)?.name} 외 ${selectedPersonnel.length - 1}명`
                                    : A.head(selectedPersonnel)?.name}
                                  <Button
                                    size="icon"
                                    className="size-4 cursor-pointer"
                                    variant="ghost"
                                    onClick={() => {
                                      table.toggleAllRowsSelected(false);
                                    }}
                                  >
                                    <X className="size-4" />
                                  </Button>
                                </Badge>
                              </Flex>
                            ) : (
                              <Text size="16" weight="medium" color="slate/500">
                                선택된 예약자가 없습니다.
                              </Text>
                            )}
                          </Button>
                        </Flex>
                        <Flex direction="column" gap="0.375">
                          <Flex justify="between" align="center">
                            <Text size="16" weight="medium" color="gray/500">
                              전체 예약자 {selectedNumber}/{total}명
                            </Text>
                            <Flex display="inline-flex" className="text-gray-400">
                              <DateSelect date={date} placeholder="날짜별 예약자 보기" />
                            </Flex>
                          </Flex>
                          <Flex className="w-[726px]">
                            <Flex className="w-full" direction="column" gap="1">
                              <DataTable.Root>
                                <DataTable.Header table={table} />
                                <DataTable.Body table={table} columns={columns} />
                              </DataTable.Root>
                              <DataTable.Pagination table={table} />
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    );
                  }}
                </DataTable.Provider>
              </Flex>
            </Flex>
          </Flex>
          <ScrollBar />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <DialogFooter>
          <Flex justify="end" gap="1.5">
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button>보내기</Button>
          </Flex>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
