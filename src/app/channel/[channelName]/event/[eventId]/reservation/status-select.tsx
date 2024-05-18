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

import { Reservation } from './columns';

type Status = Reservation['status'];

const StatusSelectItem: FC<{
  status: Status;
}> = ({ status }) => {
  return (
    <SelectItem value={status}>
      {match(status)
        .with('in-progress', () => '참여대기')
        .with('pending', () => '참여완료')
        .with('end', () => '미참석')
        .exhaustive()}
    </SelectItem>
  );
};

export const StatusSelect: FC<{
  status: Status;
}> = ({ status }) => {
  const handleChange = (value: string) => {
    // @TODO: do api call here(mutation)
    alert(value);
  };
  return (
    <Select defaultValue={status} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="상태를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <StatusSelectItem status="in-progress" />
          <StatusSelectItem status="pending" />
          <StatusSelectItem status="end" />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
