import { Row } from '@tanstack/react-table';
import { FC } from 'react';

import { ActionTrash } from '@/components/common/icon';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { Reservation } from './columns';

export const ReservedPersonnelDeleteAlertButton: FC<{
  row: Row<Reservation>;
}> = ({ row }) => {
  // @TODO: do user delete mutation here

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <ActionTrash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {row.original.name}님을 예약자 명단에서 삭제하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            예약자 정보는 복구할 수 없습니다. 삭제하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
