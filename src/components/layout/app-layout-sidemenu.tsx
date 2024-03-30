import { cx } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';
import { v4 as uuid } from 'uuid';

import {
  ActionCopy,
  NaviEvent,
  SideNaviDashboard02,
  SideNaviEventEdit,
  SideNaviPeople,
  SideNaviSurvet,
  SideNaviTicket,
  SideNaviTime,
} from '@/components/common/icon';
import { TypedLink } from '@/components/common/router';
import { Flex } from '@/components/ui/flex';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { AccessibleRoute, ChannelName, EventId } from '@/const/router';
import { PropsFrom } from '@/lib/react-typescript';

import { SideMenuButton } from './side-menu-button';

// @TODO: replace to fp-ts-route
const getDashboardLink = (
  channelName: ChannelName,
  eventId: EventId,
  to:
    | 'dashboard'
    | 'reservation'
    | 'ticket-setting'
    | 'event-setting'
    | 'survey-setting'
    | 'time-setting',
): AccessibleRoute => {
  return `/channel/${channelName}/event/${eventId}/${to}`;
};

const menuItems = [
  {
    id: uuid(),
    label: '이벤트 관리',
    subMenus: [
      {
        icon: SideNaviPeople,
        label: '예약자 관리',
        link: 'reservation',
      },
      {
        icon: SideNaviDashboard02,
        label: '대시보드',
        link: 'dashboard',
      },
      {
        icon: SideNaviTicket,
        label: '예약 티켓 관리',
        link: 'ticket-setting',
      },
    ],
  },
  {
    id: uuid(),
    label: '이벤트 설정',
    subMenus: [
      {
        icon: SideNaviEventEdit,
        label: '이벤트 기본정보',
        link: 'event-setting',
      },
      {
        icon: SideNaviSurvet,
        label: '예약자 수집정보',
        link: 'survey-setting',
      },
      {
        icon: SideNaviTime,
        label: '이벤트 날짜/인원 설정',
        link: 'time-setting',
      },
    ],
  },
] as const satisfies {
  id: string;
  label: string;
  subMenus: {
    icon: FC<PropsFrom<typeof ActionCopy>>;
    label: string;
    link: string;
  }[];
}[];

const Skeleton: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return (
    <Flex direction="column" className={cx('w-[266px] bg-white px-3', className)}>
      {children}
    </Flex>
  );
};

const Make: FC<{
  channelName: ChannelName;
  eventId: EventId;
}> = ({ channelName, eventId }) => {
  return (
    <Skeleton>
      <Flex className="py-4">
        <SideMenuButton>
          <NaviEvent size="20" color="gray/600" className="shrink-0" />
          <Text weight="medium" size="16" color="black">
            여기에 이벤트 이름이 들어간다.
          </Text>
          <ChevronRight className="shrink-0" height={24} />
        </SideMenuButton>
      </Flex>
      <Separator color="#E2E2FF" />
      {/* <div className="bg-[#E2E2FF]"></div> */}
      <Flex direction="column">
        {menuItems.map((item) => (
          <Flex key={item.id} direction="column" className="py-2">
            {/* Title */}
            <Flex className="px-2 py-1.5">
              <Text size="13" weight="semibold" color="slate/900">
                {item.label}
              </Text>
            </Flex>
            {/* Sub Menu */}
            <Flex gap="0.25" direction="column">
              {item.subMenus.map((subMenu, index) => (
                <TypedLink
                  key={`sub-menu-${item.id}-${index}`}
                  href={getDashboardLink(channelName, eventId, subMenu.link)}
                >
                  <SideMenuButton className="py-2.5">
                    <subMenu.icon size="20" />
                    <Text color="slate/900" weight="medium">
                      {subMenu.label}
                    </Text>
                  </SideMenuButton>
                </TypedLink>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Skeleton>
  );
};

export { Make, Skeleton };
