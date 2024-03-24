import type { size } from '../types';

const convertSizeToPx = (size: size) => {
  switch (size) {
    case '36':
      return 36;
    case '32':
      return 32;
    case '24':
      return 24;
    case '20':
      return 20;
    case '16':
      return 16;
    case '12':
      return 12;
    default:
      return 24;
  }
};

export default convertSizeToPx;
