import { FC } from 'react';
import { match } from 'ts-pattern';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

import { Reservation } from './columns';

type Status = Reservation['status'];

const StatusSelectItem: FC<{
  status: Status;
}> = ({ status }) => {
  return (
    <SelectItem value={status}>
      {match(status)
        .with('pending', () => '참여대기')
        .with('attended', () => '참여완료')
        .with('not-attended', () => '미참석')
        .exhaustive()}
    </SelectItem>
  );
};

export const StatusSelect: FC<{
  status: Status;
}> = ({ status }) => {
  const handleChange = (value: string) => {
    // @TODO: do api call here(mutation)
    console.log(value);
  };
  return (
    <Select defaultValue={status} onValueChange={handleChange}>
      {/* @TODO: make it to selectTrigger cva variable */}
      <SelectTrigger
        className={cn(
          match(status)
            .with('attended', () => 'border-positive focus:ring-positive')
            .with('pending', () => 'border-amber-200 focus:ring-amber-200')
            .with('not-attended', () => 'border-danger focus:ring-danger')
            .exhaustive(),
        )}
      >
        <SelectValue placeholder="상태를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <StatusSelectItem status="attended" />
          <StatusSelectItem status="not-attended" />
          <StatusSelectItem status="pending" />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
