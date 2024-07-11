'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import { useIsomorphicLayoutEffect, useStep } from 'usehooks-ts';
import { z } from 'zod';

import { CaretLeft } from '@/components/common/icon';
import { AppLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Flex } from '@/components/ui/flex';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

// form validations
//// first step
const firstStepSchema = z.object({
  eventName: z.string().min(1, {
    message: '이벤트 이름을 입력해주세요',
  }),
  eventDescription: z.string().min(1, {
    message: '이벤트 설명을 입력해주세요',
  }),
  eventCaution: z.string().optional(),
  parkingAvailable: z.enum(['true', 'false']),
  isFree: z.enum(['true', 'false']),
});

type FirstStepForm = z.infer<typeof firstStepSchema>;

//// second step
const secondStepSchema = z.object({
  placeName: z.string().min(1, {
    message: '장소 이름을 입력해주세요',
  }),
  placeAddress: z.string().min(1, {
    message: '상세주소를 입력해주세요',
  }),
  placeDescription: z.string().optional(),
});

type SecondStepForm = z.infer<typeof secondStepSchema>;

// merge all schema for validation before submit
const mergedSchema = firstStepSchema.and(secondStepSchema);
type FormValues = FirstStepForm & SecondStepForm;

// components
//// first step
const FirstStep: FC<{
  form: ReturnType<typeof useForm<FormValues>>;
}> = ({ form }) => {
  return (
    <>
      <Flex justify="center">
        <Text weight="bold" size="24" color="gray/900">
          이벤트 정보를 입력해주세요.
        </Text>
      </Flex>
      <FormField
        control={form.control}
        name="eventName"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>
              <Text weight="medium" size="14" color="slate/900">
                이벤트 이름
              </Text>
            </FormLabel>
            <FormControl>
              <Input placeholder="이벤트페어리 팝업스토어" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>
              <Text weight="medium" size="14" color="slate/900">
                이벤트 상세정보
              </Text>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="이벤트 상세정보를 적어주세요."
                className="h-[13.5rem] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventCaution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Text weight="medium" size="14" color="slate/900">
                주의사항
              </Text>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="이벤트에 주의사항이 있으면 알려주세요."
                className="h-[9.75rem] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="parkingAvailable"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>
              <Text weight="medium" size="14" color="slate/900">
                주차가능 여부
              </Text>
            </FormLabel>
            <FormControl>
              <Flex gap="3.5" asChild>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                  <FormItem direction="row" align="center" gap="0.5" className="w-20">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel>
                      <Text weight="medium" size="16" color="gray/900">
                        주차가능
                      </Text>
                    </FormLabel>
                  </FormItem>
                  <FormItem direction="row" align="center" gap="0.5">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel>
                      <Text weight="medium" size="16" color="gray/900">
                        주차불가
                      </Text>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </Flex>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="isFree"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>
              <Text weight="medium" size="14" color="slate/900">
                유, 무료 여부
              </Text>
            </FormLabel>
            <FormControl>
              <Flex gap="3.5" asChild>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                  <FormItem direction="row" align="center" gap="0.5" className="w-20">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      <Text weight="medium" size="16" color="gray/900">
                        유료
                      </Text>
                    </FormLabel>
                  </FormItem>
                  <FormItem direction="row" align="center" gap="0.5">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      <Text weight="medium" size="16" color="gray/900">
                        무료
                      </Text>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </Flex>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
//// second step
const SecondStep: FC<{
  form: ReturnType<typeof useForm<FormValues>>;
}> = ({ form }) => {
  return (
    <>
      <Flex justify="center">
        <Text weight="bold" size="24" color="gray/900">
          이벤트 위치를 설정해주세요.
        </Text>
      </Flex>
      <FormField
        control={form.control}
        name="placeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>장소이름</FormLabel>
            <FormControl>
              <Input placeholder="역삼 조선팰리스" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="placeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel required>
              <Text weight="medium" size="14" color="slate/900">
                상세주소
              </Text>
            </FormLabel>
            <FormControl>
              <Input placeholder="서울시 강남구 역삼동" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="placeDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Text weight="medium" size="14" color="slate/900">
                장소 설명
              </Text>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="장소에 대한 안내가 있다면 적어주세요"
                className="h-[9.75rem] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const CreateOfflineEventPage = () => {
  const { toast } = useToast();

  const [currentStep, helpers] = useStep(2);
  const [forceValidation, setForceValidation] = useState(false);

  // @TODO: replace to api value
  const firstStepDefaultValues: FirstStepForm = {
    eventName: '',
    eventDescription: '',
    eventCaution: '',
    parkingAvailable: 'true',
    isFree: 'true',
  };

  const secondStepDefaultValues: SecondStepForm = {
    placeName: '',
    placeAddress: '',
    placeDescription: '',
  };

  // validation unions
  const defaultValues = {
    ...firstStepDefaultValues,
    ...secondStepDefaultValues,
  };

  const currentFormSchema = match(currentStep)
    .with(1, () => firstStepSchema)
    .with(2, () => secondStepSchema)
    .otherwise(() => {
      throw new Error('Invalid step');
    });
  const form = useForm<FormValues>({
    shouldUnregister: false,
    mode: 'onBlur',
    resolver: zodResolver(currentFormSchema),
    defaultValues: defaultValues,
  });

  // @WARN: when step changes(especially go to prev step), form validation didn't trigger for the previous step
  // so, we need to trigger form validation for changed step manually
  useIsomorphicLayoutEffect(() => {
    (async () => {
      if (forceValidation) {
        await form.trigger();
        setForceValidation(false);
      }
    })();

    return () => {
      form.clearErrors();
    };
  }, [forceValidation]);

  // event handlers
  const handleNext = async () => {
    // trigger form validation
    const isStepValid = await form.trigger();
    // @TODO: Intermediate save api call point
    if (isStepValid) {
      helpers.goToNextStep();
    }
  };

  const handlePrev = async () => {
    helpers.goToPrevStep();
    setForceValidation(true);
  };

  const onSubmit = async () => {
    // @WARN: data only contains the values of the currently assigned zod schema((https://github.com/orgs/react-hook-form/discussions/4028#discussioncomment-5906326)
    // So, we need to access the form values directly
    const formValues = form.getValues();
    const isValid = mergedSchema.safeParse(formValues);
    if (isValid.success) {
      // @TODO: API call(api call must contains intermediate save point removal)
      toast({
        title: 'valid',
        description: JSON.stringify(isValid.data, null, 2),
      });
    } else {
      toast({
        title: 'invalid',
      });
    }

    handleNext();
  };

  return (
    <main>
      <AppLayout.Header.MakeAuthedHeaderTemporailyMade />
      <Container size="sm" className="my-14">
        <Flex direction="column">
          <Form {...form}>
            <Flex direction="column" gap="2.25" asChild>
              <form>
                {match(currentStep)
                  .with(1, () => <FirstStep form={form} />)
                  .with(2, () => <SecondStep form={form} />)
                  .otherwise(() => {
                    throw new Error('Invalid step');
                  })}
                <Flex justify="between">
                  <Flex gap="0.5" asChild>
                    <Button
                      variant="ghost"
                      disabled={!helpers.canGoToPrevStep}
                      className={cn(!helpers.canGoToPrevStep ? 'invisible' : 'visible')}
                      onClick={handlePrev}
                    >
                      <CaretLeft width={24} height={24} />
                      <Text weight="medium" size="16" color="gray/600">
                        이전으로
                      </Text>
                    </Button>
                  </Flex>
                  {helpers.canGoToNextStep ? (
                    <Button
                      className="w-[7.5rem]"
                      disabled={!form.formState.isValid}
                      onClick={form.handleSubmit(handleNext)}
                    >
                      <Text weight="medium" size="16">
                        다음
                      </Text>
                    </Button>
                  ) : (
                    <Button
                      className="w-[7.5rem]"
                      disabled={!form.formState.isValid}
                      onClick={form.handleSubmit(onSubmit)}
                    >
                      <Text weight="medium" size="16">
                        생성하기
                      </Text>
                    </Button>
                  )}
                </Flex>
              </form>
            </Flex>
          </Form>
        </Flex>
      </Container>
    </main>
  );
};

export default CreateOfflineEventPage;
