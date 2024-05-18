import { faker } from '@faker-js/faker';

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
    gender: faker.helpers.arrayElement<'male' | 'female'>(['male', 'female']),
    status: faker.helpers.arrayElement<'in-progress' | 'pending' | 'end'>([
      'in-progress',
      'pending',
      'end',
    ]),
  };
};
