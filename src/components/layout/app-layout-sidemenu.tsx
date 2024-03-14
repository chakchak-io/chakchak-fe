import { cva, VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  FC,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  PropsWithChildren,
  SVGProps,
} from 'react';

import {
  Dashboard,
  EventEdit,
  EventPageIcon,
  People,
  Star,
  Survet,
  TicketManage,
  Time,
} from '../../components/common/icon';
import { Container } from '../ui/container';
import { Flex } from '../ui/flex';
import { Text } from '../ui/text';

const menubar = cva('');

type menubarVariant = VariantProps<typeof menubar>;

const menuItems = [
  {
    id: 'manage',
    label: '이벤트 관리',
    subMenus: [
      {
        icon: People,
        label: '예약자 관리',
        link: '/reservation',
      },
      {
        icon: Dashboard,
        label: '대시보드',
        link: '/dashboard',
      },
      {
        icon: TicketManage,
        label: '예약 티켓 관리',
        link: '/ticket-setting',
      },
      {
        icon: EventPageIcon,
        label: '이벤트 페이지 관리',
        link: '/event-page-setting', // change name -- because it's confusing
      },
    ],
  },
  {
    id: 'setting',
    label: '이벤트 설정',
    subMenus: [
      {
        icon: EventEdit,
        label: '이벤트 기본정보',
        link: '/', //TODO: should change
      },
      {
        icon: Survet,
        label: '예약자 수집정보',
        link: '/', //TODO: should change
      },
      {
        icon: Time,
        label: '이벤트 날짜/인원 설정',
        link: '/', //TODO: should change
      },
    ],
  },
];

const Skeleton: FC<
  PropsWithChildren<
    {
      className?: string;
    } & menubarVariant
  >
> = ({ children }) => {
  return (
    <Flex direction="column" className="w-[266px] bg-white px-3 pt-4">
      {children}
    </Flex>
  );
};

const MakeMenuButton: FC<{
  icon: MemoExoticComponent<ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>>;
  label: string;
  link: string;
}> = ({ icon, label, link }) => {
  const Icon = icon;
  return (
    <Link href={link}>
      <Flex className={`gap-2 px-2 py-[10px]`}>
        <Icon width={20} height={20} />
        <Text color="slate/900" weight="medium" className={`bg-transparent`}>
          {label}
        </Text>
      </Flex>
    </Link>
  );
};

const Make = () => {
  return (
    <Skeleton>
      <Flex
        className={'cursor-pointer rounded-[6px] bg-slate-100 p-2'}
        as="div"
        align="center"
        gap="0.5"
      >
        <Star width={20} height={20} className="shrink-0" fill="hsl(var(--gray-600))" />
        <Text>여기에 이벤트 이름이 들어간다.</Text>
        <ChevronRight className="shrink-0" height={24} />
      </Flex>
      <div className="mb-2 mt-5 h-[1px] w-full bg-[#E2E2FF]"></div>
      <Flex as="div" direction="column">
        {menuItems.map((item) => (
          <Container key={`${item.id}-${item.label}`}>
            <Container className="my-[5px] py-[6px]">
              <Text key={`${item.id}-${item.label}`}>{item.label}</Text>
            </Container>
            <Flex gap="0.5" direction="column">
              {item.subMenus.map((subMenu) => (
                <MakeMenuButton
                  key={`${subMenu.label}-${subMenu.link}`}
                  icon={subMenu.icon}
                  label={subMenu.label}
                  link={subMenu.link}
                />
              ))}
            </Flex>
          </Container>
        ))}
      </Flex>
    </Skeleton>
  );
};

export { Make, MakeMenuButton, Skeleton };
