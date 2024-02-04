// @TODO: 계층구조 만든 후 string -> 타입 좁히기
type AccessibleRoute =
  | '/channel'
  | '/channel/create'
  // below means '/channel/[channelId]'
  | `/channel/${string}`
  | '/signin'
  | '/signup';

export type { AccessibleRoute };
