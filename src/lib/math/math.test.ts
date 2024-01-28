import { expect, test } from 'vitest';
import { add } from './math';

test('add 1, 2, 3, 4, 5, 6, 7', () => {
  expect(add(1, 2, 3, 4, 5, 6, 7)).toBe(28);
});
