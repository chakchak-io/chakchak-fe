type ChannelName = string;
type EventId = string;
type AccessibleRoute =
  | '/'
  | '/signin'
  | '/signup'
  | '/account/my-page'
  | '/account/my-page?tab=account'
  | '/account/my-page?tab=personal-info'
  | '/channel'
  | '/preview'
  // 이하는 type 검사가 실제로는 제대로 동작하지 않습니다
  | '/channel/create'
  | `/channel/${ChannelName}`
  | `/channel/${ChannelName}/event`
  | `/channel/${ChannelName}/event/create`
  | `/channel/${ChannelName}/event/create/online`
  | `/channel/${ChannelName}/event/create/offline`
  | `/channel/${ChannelName}/event/${EventId}`
  | `/channel/${ChannelName}/ticket`
  | `/channel/${ChannelName}/setting`;

export type { ChannelName, EventId, AccessibleRoute };
