import { ElementType } from 'react';

type PropsFrom<TComponent> =
  TComponent extends React.FC<infer Props>
    ? Props
    : TComponent extends React.Component<infer Props>
      ? Props
      : never;

type PropsFromWithoutRef<TComponent> =
  TComponent extends React.FC<infer Props>
    ? Omit<Props, 'ref'>
    : TComponent extends React.Component<infer Props>
      ? Omit<Props, 'ref'>
      : never;

type PropsWithoutRef<T extends ElementType> = React.ComponentPropsWithoutRef<T>;
type ExtractRefFromProps<T> = T extends { ref: infer R } ? R : never;

export type { PropsFrom, PropsFromWithoutRef, PropsWithoutRef, ExtractRefFromProps };
