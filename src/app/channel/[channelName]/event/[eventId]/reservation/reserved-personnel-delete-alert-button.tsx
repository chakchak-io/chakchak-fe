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
  console.log(row);
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
          <AlertDialogTitle>예약자를 삭제할까요?</AlertDialogTitle>
          <AlertDialogDescription>
            예약자 관리 리스트에서 삭제되고, 다시 복구할 수 없습니다
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
