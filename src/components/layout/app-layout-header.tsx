import { cva, VariantProps } from 'class-variance-authority';
import { User } from 'lucide-react';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { BrandLogo, Setting, Star, Ticket } from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { PropsFromWithoutRef } from '@/lib/react-typescript';
import { cn } from '@/lib/utils';

import { TypedLink } from '../common/router';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const header = cva('border-b-gray-100 border-b bg-white px-8 py-[6px]', {
  variants: {
    height: {
      '4': 'h-16',
      '6': 'h-24',
    },
  },
  defaultVariants: {
    height: '4',
  },
});

type headerVariant = VariantProps<typeof header>;

const Skeleton: FC<
  PropsWithChildren<
    {
      className?: string;
    } & headerVariant
  >
> = ({
  children,
  className,
  // cva
  height,
}) => {
  return (
    <Flex align="center" className={className} asChild>
      <nav
        className={header({
          height,
        })}
      >
        <Flex justify="between" className="w-full">
          <Flex align="center" gap="0.5" asChild>
            <Link href="/">
              <BrandLogo />
              <Text size="20" weight="bold" color="gray/600">
                EventFairy
              </Text>
            </Link>
          </Flex>
          {children}
        </Flex>
      </nav>
    </Flex>
  );
};

const Make = () => {
  // @TODO: login시 header 변경 필요
  return (
    <Skeleton>
      <Flex gap="1">
        <Button variant="secondary" asChild>
          <TypedLink href="/signin">
            <Text weight="medium" size="14">
              로그인/회원가입
            </Text>
          </TypedLink>
        </Button>
        <Button asChild>
          <Link href="https://tally.so/r/3lrqD5">
            <Text weight="medium" size="14">
              사전 예약 신청
            </Text>
          </Link>
        </Button>
      </Flex>
    </Skeleton>
  );
};
// @TODO: 아래 컴포넌트 분리 or 통합 필요
const UserAvatar = () => {
  return (
    <Flex align="center" gap="1.5">
      <Text size="16">이벤트페어리</Text>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="/assets/user_profile.jpg" alt="user-profile" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>내 계정</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              <TypedLink href="/account/my-page">
                <Text size="14" weight="medium" color="gray/500">
                  마이페이지
                </Text>
              </TypedLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Flex>
  );
};

const ChannelButtons: FC<{
  channelName?: string;
  selectedTab?: (typeof tabList)[number]['name'];
}> = ({ channelName, selectedTab }) => {
  return (
    <>
      {channelName && (
        <Flex gap="4" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {tabList.map((item) => (
            <TypedLink key={item.name} href={`/channel/${channelName}/${item.name}`}>
              <Flex direction="column" justify="center" gap="0.5" asChild>
                <ActiveIconButton active={item.name === selectedTab}>
                  {item.icon}
                  <Text size="16" weight="medium">
                    {item.label}
                  </Text>
                </ActiveIconButton>
              </Flex>
            </TypedLink>
          ))}
        </Flex>
      )}
    </>
  );
};

const MakeAuthedHeaderTemporailyMade: FC<PropsFromWithoutRef<typeof Skeleton>> = ({
  children,
  ...props
}) => {
  return (
    <Skeleton {...props}>
      {children}
      <UserAvatar />
    </Skeleton>
  );
};

// @TODO: 해당 컴포넌트는 login logic이 완성되면 Make 컴포넌트와 합쳐야합니다
const DEFAULT_TAB = 'event';

const ActiveIconButton: FC<
  PropsFromWithoutRef<typeof Button> & {
    active: boolean;
  }
> = ({ active, children, className, ...props }) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        className,
        active
          ? 'bg-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary'
          : '',
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

const tabList = [
  {
    name: 'event',
    label: '이벤트',
    icon: <Star width={32} height={32} />,
  },
  {
    name: 'ticket',
    label: '내 티켓',
    icon: <Ticket width={32} height={32} />,
  },
  {
    name: 'setting',
    label: '채널 설정',
    icon: <Setting width={32} height={32} />,
  },
] as const;

const MakeAuthedHeaderWithChannelTemporailyMade: FC<{
  channelName?: string;
  selectedTab?: (typeof tabList)[number]['name'];
}> = ({ channelName, selectedTab = DEFAULT_TAB }) => {
  return (
    <MakeAuthedHeaderTemporailyMade height="6" className="relative">
      <ChannelButtons channelName={channelName} selectedTab={selectedTab} />
    </MakeAuthedHeaderTemporailyMade>
  );
};

export {
  Skeleton,
  UserAvatar,
  ChannelButtons,
  // Make,
  Make,
  MakeAuthedHeaderTemporailyMade,
  MakeAuthedHeaderWithChannelTemporailyMade,
};
