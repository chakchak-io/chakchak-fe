export type PropsFrom<TComponent> =
  TComponent extends React.FC<infer Props> ? Props : TComponent extends React.Component<infer Props> ? Props : never

export type PropsFromWithoutRef<TComponent> =
  TComponent extends React.FC<infer Props>
    ? Omit<Props, "ref">
    : TComponent extends React.Component<infer Props>
      ? Omit<Props, "ref">
      : never

export type ValueOf<T> = T[keyof T]
