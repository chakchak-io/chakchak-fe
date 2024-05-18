import { faker } from '@faker-js/faker';
import { O } from '@mobily/ts-belt';

import { Reservation } from '@/app/channel/[channelName]/event/[eventId]/reservation/columns';

export const createRandomReservation = (): Reservation => {
  return {
    id: faker.string.uuid(),
    // incremental number
    name: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    email: faker.helpers.maybe(faker.internet.email, {
      probability: 0.5,
    }),
    gender: faker.helpers.arrayElement<O.Option<'male' | 'female'>>(['male', 'female', O.None]),
    status: faker.helpers.arrayElement<'attended' | 'not-attended' | 'pending'>([
      'attended',
      'not-attended',
      'pending',
    ]),
  };
};
