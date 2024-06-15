export type ValueOf<T> = T[keyof T];

export type NonEmptyArray<T> = [T, ...T[]];
