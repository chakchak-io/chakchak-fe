'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { G } from '@mobily/ts-belt';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ChevronRight } from '@/components/common/icon';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { useClientTypedRouter } from '@/hooks';
import { CommonNextPageProps } from '@/lib/nextjs/type';

// account tab

//// account:edit-name
const editAccountNameSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: '이름을 입력해주세요.',
    })
    .max(20, {
      message: '이름은 20자 이내로 입력해주세요.',
    }),
});

type EditAccountNameForm = z.infer<typeof editAccountNameSchema>;

const EditAccountNameDialog = () => {
  // Get User Default Value from API or injected from outside of this component
  const { toast } = useToast();
  const form = useForm<EditAccountNameForm>({
    mode: 'all',
    resolver: zodResolver(editAccountNameSchema),
    defaultValues: {
      name: '김동환',
    },
  });

  const onSubmit = (values: EditAccountNameForm) => {
    console.log(values);
    toast({
      title: 'Need to implement',
      description: 'Edit account name is not implemented yet.',
    });
  };

  return (
    <FormItem>
      <Label>
        <Text size="14" weight="medium" color="slate/900">
          이름
        </Text>
      </Label>
      <Dialog>
        <DialogTrigger asChild>
          <Flex justify="between" asChild>
            <Button fullWidth variant="outline" className="h-[44px]">
              <Text size="16" weight="medium" color="slate/900">
                김동환
              </Text>
              <ChevronRight />
            </Button>
          </Flex>
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <Flex direction="column" gap="2" asChild>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogTitle>
                  <Flex justify="center" asChild>
                    <Text size="20" weight="semibold" color="slate/900">
                      이름
                    </Text>
                  </Flex>
                </DialogTitle>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button variant="outline" asChild>
                    <DialogClose>
                      <Text size="16" weight="medium" color="slate/900">
                        취소
                      </Text>
                    </DialogClose>
                  </Button>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    <Text size="16" weight="medium">
                      저장
                    </Text>
                  </Button>
                </DialogFooter>
              </form>
            </Flex>
          </Form>
        </DialogContent>
      </Dialog>
    </FormItem>
  );
};

//// account:edit-organization
const editAccountOrganizationSchema = z.object({
  organization: z.string().min(1, {
    message: '소속을 입력해주세요.',
  }),
});

type EditAccountOrganizationForm = z.infer<typeof editAccountOrganizationSchema>;

const EditAccountOrganizationDialog = () => {
  const { toast } = useToast();
  const form = useForm<EditAccountOrganizationForm>({
    mode: 'all',
    resolver: zodResolver(editAccountOrganizationSchema),
    defaultValues: {
      organization: '이벤트 페어리',
    },
  });

  const onSubmit = (values: EditAccountOrganizationForm) => {
    console.log(values);
    toast({
      title: 'Need to implement',
      description: 'Edit account organization is not implemented yet.',
    });
  };

  return (
    <FormItem>
      <Label>
        <Text size="14" weight="medium" color="slate/900">
          소속
        </Text>
      </Label>
      <Dialog>
        <DialogTrigger asChild>
          <Flex justify="between" asChild>
            <Button fullWidth variant="outline" className="h-[44px]">
              <Text size="16" weight="medium" color="slate/900">
                이벤트 페어리
              </Text>
              <ChevronRight />
            </Button>
          </Flex>
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <Flex direction="column" gap="2" asChild>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogTitle>
                  <Flex justify="center" asChild>
                    <Text size="20" weight="semibold" color="slate/900">
                      소속
                    </Text>
                  </Flex>
                </DialogTitle>
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="소속을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button variant="outline" asChild>
                    <DialogClose>
                      <Text size="16" weight="medium" color="slate/900">
                        취소
                      </Text>
                    </DialogClose>
                  </Button>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    <Text size="16" weight="medium">
                      저장
                    </Text>
                  </Button>
                </DialogFooter>
              </form>
            </Flex>
          </Form>
        </DialogContent>
      </Dialog>
    </FormItem>
  );
};

const AccountManagementTab = () => {
  return (
    <Flex direction="column" gap="2.25">
      <FormItem>
        <Label>
          <Text size="14" weight="medium" color="slate/900">
            이메일
          </Text>
        </Label>
        <Input
          className="h-[44px]"
          disabled
          defaultValue="event-fairy@evf.com"
          placeholder="이메일을 입력해주세요."
        />
      </FormItem>
      <EditAccountNameDialog />
      <EditAccountOrganizationDialog />
    </Flex>
  );
};

// personal info tab

//// account:edit-name
// check password and changed password is same
const editersonalInfoPasswordSchema = z
  .object({
    currentPassword: z.string().min(8, {
      message: '비밀번호를 8자 이상 입력해주세요.',
    }),
    newPassword: z.string().min(8, {
      message: '비밀번호를 8자 이상 입력해주세요.',
    }),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: '현재 비밀번호와 새 비밀번호가 같습니다.',
    path: ['newPassword'],
  });

type EditersonalInfoPasswordForm = z.infer<typeof editersonalInfoPasswordSchema>;

const EditPersonalInfoPasswordDialog = () => {
  // Get User Default Value from API or injected from outside of this component
  const { toast } = useToast();
  const form = useForm<EditersonalInfoPasswordForm>({
    mode: 'all',
    resolver: zodResolver(editersonalInfoPasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const onSubmit = (values: EditersonalInfoPasswordForm) => {
    console.log(values);
    toast({
      title: 'Need to implement',
      description: 'Edit password is not implemented yet.',
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Flex justify="between" asChild>
          <Button fullWidth variant="ghost">
            <Text size="16" weight="medium" color="slate/700">
              비밀번호 변경
            </Text>
            <ChevronRight />
          </Button>
        </Flex>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <Flex direction="column" gap="2" asChild>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>
                  <Flex justify="center" asChild>
                    <Text size="20" weight="semibold" color="slate/900">
                      비밀번호 변경
                    </Text>
                  </Flex>
                </DialogTitle>
              </DialogHeader>
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Text size="14" weight="medium" color="slate/900">
                        현재 비밀번호
                      </Text>
                    </FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="비밀번호를 입력해주세요" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        <Text size="14" weight="medium" color="slate/900">
                          새 비밀번호
                        </Text>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="새 비밀번호를 입력해주세요"
                          {...field}
                        />
                      </FormControl>
                      {/* show description only before input */}
                      {!fieldState.error && !fieldState.isDirty && (
                        <FormDescription>
                          <Text size="14" weight="medium" color="slate/500">
                            비밀번호는 8자 이상 입력해주세요.
                          </Text>
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <DialogFooter>
                <Button variant="outline" asChild>
                  <DialogClose>
                    <Text size="16" weight="medium" color="slate/900">
                      취소
                    </Text>
                  </DialogClose>
                </Button>
                <Button type="submit" disabled={!form.formState.isValid}>
                  <Text size="16" weight="medium">
                    저장
                  </Text>
                </Button>
              </DialogFooter>
            </form>
          </Flex>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const PersonalInfoTab = () => {
  const { toast } = useToast();

  const onWithdraw = () => {
    toast({
      title: 'Need to implement',
      description: 'Withdraw is not implemented yet.',
    });
  };

  return (
    <Flex direction="column" gap="1.5">
      <EditPersonalInfoPasswordDialog />
      <Separator />
      <Flex justify="between" asChild>
        <Button fullWidth variant="ghost" onClick={onWithdraw}>
          <Text size="16" weight="medium" color="slate/700">
            회원 탈퇴
          </Text>
          <ChevronRight />
        </Button>
      </Flex>
    </Flex>
  );
};

const DEFAULT_TAB = 'account';

const AccountMyPage: NextPage<CommonNextPageProps> = ({ searchParams }) => {
  const tab = G.isString(searchParams['tab']) ? searchParams['tab'] : DEFAULT_TAB;
  const router = useClientTypedRouter();

  const { toast } = useToast();

  const onLogout = () => {
    toast({
      title: 'Need to implement',
      description: 'Logout is not implemented yet.',
    });
  };

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container size="md" className="mt-9">
        <Flex direction="column" gap="0.75">
          <Flex direction="column" gap="1.5" asChild>
            <Card className="p-6">
              <Flex>
                <Text weight="bold" size="32" color="gray/900">
                  마이페이지
                </Text>
              </Flex>
              <Tabs defaultValue={tab}>
                {/* @TODO: replace flex gap if possible */}
                <TabsList className="mb-10">
                  <TabsTrigger
                    value="account"
                    onClick={() => {
                      router.replace('/account/my-page?tab=account');
                    }}
                  >
                    <Text weight="semibold" size="16" color="black">
                      계정 관리
                    </Text>
                  </TabsTrigger>
                  <TabsTrigger
                    value="personal-info"
                    onClick={() => {
                      router.replace('/account/my-page?tab=personal-info');
                    }}
                  >
                    <Text weight="semibold" size="16" color="black">
                      개인 정보
                    </Text>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <AccountManagementTab />
                </TabsContent>
                <TabsContent value="personal-info">
                  <PersonalInfoTab />
                </TabsContent>
              </Tabs>
            </Card>
          </Flex>
          <Flex>
            <Button variant="ghost" onClick={onLogout}>
              <Text weight="medium" size="14" color="gray/400">
                로그아웃
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default AccountMyPage;
