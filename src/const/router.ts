// @TODO: 계층구조 만든 후 string -> 타입 좁히기

type ChannelName = string;
type AccessibleRoute =
  | '/'
  | '/signin'
  | '/signup'
  | '/channel'
  // 이하는 type 검사가 실제로는 제대로 동작하지 않습니다
  | '/channel/create'
  | `/channel/${ChannelName}`
  | `/channel/${ChannelName}/event`
  | `/channel/${ChannelName}/ticket`
  | `/channel/${ChannelName}/setting`;

export type { AccessibleRoute };
