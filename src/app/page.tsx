import { Flex, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import BrandLogo from "./components/BrandLogo"
import { Space } from "./components/Space"

const Header = () => {
  return (
    <nav className="border-b border-b-gray-100 bg-white px-2 py-[6px]">
      <Flex justify="between" className="m-auto max-w-[1200px]">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
          <span className="font-sourceSansPro text-xl font-semibold text-primary">ChakChak</span>
        </Link>
        <Link href="https://tally.so/r/3lrqD5" className="rounded-lg bg-gray-900 px-4 py-[10px] text-white">
          사전 예약 신청
        </Link>
      </Flex>
    </nav>
  )
}

const SectionOne = () => {
  return (
    <Flex direction="column" align="center" asChild>
      <section className="my-[120px]">
        <Flex direction="column" align="center" gap="5">
          <h2 className="text-center text-[56px] font-bold leading-[68px]">
            예약시스템, 내 웹사이트에
            <Space />
            <span className="text-primary">착!</span>
          </h2>
          <Flex direction="column" align="center" gap="6">
            <p className="text-center text-xl text-gray-500">
              <span className="text-primary">팝업스토어, 이벤트, 매장 예약</span>
              <Space />
              등 각종 온, 오프라인 행사를 <br /> 내 웹사이트에서 직접 관리하세요.
            </p>

            <Link
              href="https://tally.so/r/3lrqD5"
              className="flex w-fit items-center rounded-xl bg-gray-900 px-6 py-4 text-2xl text-white"
            >
              사전 예약 신청
              <div>
                <Image priority src={"/rightArrow.svg"} alt="Right Arrow" height={24} width={24} />
              </div>
            </Link>
            <div>
              <Image src="/home/section1Image1.png" width={1200} height={584} alt="Example Image" />
            </div>
          </Flex>
        </Flex>
      </section>
    </Flex>
  )
}

const SectionTwo = () => {
  return (
    <Flex direction="column" align="center" asChild>
      <section className="my-[120px]">
        <Flex direction="column" className="w-full gap-14">
          <Flex direction="column" align="center" gap="5">
            <h2 className="text-center text-[56px] font-bold leading-[72px] tracking-[-0.84px]">
              이벤트 예약, 내 웹사이트에서 <br />
              <span className="text-primary">직접 받으세요</span>
            </h2>
            <p className="text-center text-xl font-medium text-gray-500">
              착착은 2가지
              <Space />
              <span className="text-primary">Widget SDK</span>
              를 제공하여
              <br /> 나에게 맞는 솔루션으로
              <br /> 이벤트를 직접 관리할 수 있어요.
            </p>
          </Flex>
          {/* Responsive */}
          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                위젯 UI
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                내 웹사이트 어디서든 <br />
                브랜드 이벤트를 홍보하세요
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                착착에서 제공하는 Widget SDK를 통해
                <br /> 내 웹사이트 어디서든 이벤트 예약 기능을 <br />
                쉽고 간단하게 추가할 수 있어요.
              </p>
            </figcaption>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/home/featureImage1.png"
                width={636}
                height={466}
                alt="Feature Image1"
                // Responsive
                className="mx-auto lg:absolute lg:-bottom-2 lg:left-[52px] lg:mx-0 lg:w-full lg:pr-[52px]"
              />
            </div>
          </figure>

          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                예약페이지
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                웹사이트, 개발자가 없어도 <br />
                문제없어요
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                착착이 제공하는 <br />
                기본 예약 페이지와 링크를 생성해서 <br />
                간단하게 고객을 모집할 수 있어요.
              </p>
            </figcaption>
            <div className="relative flex w-full overflow-hidden">
              <Image
                src="/home/feature2Image1.png"
                width={436}
                height={675}
                alt="Feature Image2 Image 1"
                className="relative left-20 lg:absolute lg:bottom-0 lg:left-[52px]"
              />
              <Image
                src="/home/feature2Image2.png"
                alt="feature1 image2"
                width={436}
                height={675}
                className="relative right-28 lg:absolute lg:bottom-0 lg:left-60"
              />
            </div>
          </figure>
        </Flex>
      </section>
    </Flex>
  )
}

const SectionThree = () => {
  return (
    <Flex direction="column" align="center" asChild>
      <section className="my-[120px]">
        <Flex direction="column" className="w-full gap-14">
          <Flex direction="column" align="center" gap="5">
            <h2 className="text-center text-[56px] font-bold leading-[72px] tracking-[-0.84px]">
              다양한 커스터마이징으로 <br /> 브랜드를 <Space />
              <span className="text-primary">빛내보세요.</span>
            </h2>

            <p className="text-center text-xl font-medium text-gray-500">
              착착에서 <Space />
              <span className="text-primary">브랜드 로고, 이미지, 프라이머리 컬러</span>
              를 <br /> 활용해 예약 페이지 및 티켓 UI를 <br />
              쉽게 커스텀 할 수 있습니다.
            </p>
          </Flex>

          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                브랜드티켓
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                예약 티켓을 브랜드 경험의 <br />
                새로운 창구로 활용해 보세요.
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                착착은 참석 확인을 위한 예약 티켓을 생성 가능해요.
                <br />
                티켓에 브랜드 이미지를 삽입하고, <br />
                고객들에게 더욱 강력한 브랜드 인상을 남겨보세요.
                <br />
              </p>
            </figcaption>
            <div className="relative flex w-full justify-center">
              <Image
                src="/home/ticket1.png"
                width={254}
                height={505}
                alt="Feature Image3 Ticket Image"
                className="lg:absolute lg:bottom-0 lg:left-[82px] lg:z-10"
              />
              <Image
                src="/home/ticket2.png"
                alt="feature3 ticket Image2"
                width={254}
                height={505}
                className="lg:absolute lg:right-[36px] lg:top-0"
              />
            </div>
          </figure>
          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                UI커스텀
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                브랜드를 담은 예약 페이지, <br />
                착착해서 만들어보세요.
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                착착의 기본 예약 페이지는
                <br />
                브랜드의 프라이머리 컬러, 이미지를 적용할 수 있어요.
                <br />
                브랜드의 이야기를 쉽게 전달해 보세요.
                <br />
              </p>
            </figcaption>
            <div className="relative flex w-full justify-center overflow-hidden">
              <Image
                src="/home/reservationPage.png"
                width={590}
                height={428}
                alt="Feature Image3 Ticket Image"
                className="lg:absolute lg:bottom-0 lg:left-[52px]"
              />

              <div className=" absolute bottom-0 w-fit rounded-[12px] bg-white p-6 shadow-custom lg:bottom-[24px] lg:right-[52px]">
                <div className="flex w-[338px] justify-center rounded-[12px] bg-gradient-to-r from-[#ff00f5] to-[#ff5c00] px-6 py-4 text-2xl font-bold text-white">
                  예약하기
                </div>
              </div>
            </div>
          </figure>
        </Flex>
      </section>
    </Flex>
  )
}

const SectionFour = () => {
  return (
    <Flex direction="column" align="center" asChild>
      <section className="my-[120px]">
        <Flex direction="column" className="w-full gap-14">
          <Flex direction="column" align="center" gap="5">
            <h2 className="text-center text-[56px] font-bold leading-[72px] tracking-[-0.84px]">
              예약 관리와 고객 CRM도 <br /> 착착!
              <Space />
              <span className="text-primary">관리하세요.</span>
            </h2>
            <p className="text-center text-xl font-medium text-gray-500">
              직관적인 대시보드로 예약자 관리와 <br />
              고객 CRM을 간편하게 관리하고 <br />
              <span className="text-primary">마케팅 기회로 전환하세요.</span>
            </p>
          </Flex>

          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                예약자 관리
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                온, 오프라인 예약자 관리도 <br />
                간단하게 할 수 있어요
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                예약 티켓의 QR 코드로 예약자를 자동으로 인식하며,
                <br />
                상태 창을 이용하여 수동으로
                <br />
                예약자를 편리하게 관리할 수 있어요.
                <br />
              </p>
            </figcaption>
            <div className="relative flex h-[360px] w-full justify-center overflow-hidden lg:h-auto">
              <Image
                src="/home/reservationManagePage.png"
                width={450}
                height={300}
                alt="Feature Image3 Ticket Image"
                className="lg:absolute lg:bottom-0 lg:left-0"
              />
              <Image
                src="/home/ticket3.png"
                width={254}
                height={505}
                alt="ticket"
                className="lg:absolute lg:right-[20px] lg:top-0"
              />
            </div>
          </figure>

          <figure className="flex h-auto w-full flex-wrap overflow-hidden rounded-3xl bg-[#FAFAFA] lg:h-[480px] lg:flex-nowrap">
            <figcaption className="shrink-0 basis-[460px] p-6">
              <span className="inline-block rounded-lg bg-[#e6e2ff] px-3 py-2 text-lg font-semibold leading-[22px] text-[#3D02E3]">
                CRM 데이터
              </span>
              <h3 className="my-4 text-[32px] font-bold leading-[46px]">
                이벤트 마케팅 효과를
                <br />
                한눈에 파악하세요
              </h3>

              <p className="text-lg font-medium leading-[30px] text-gray-500">
                일별 예약자 상태, 시간대별 참석 비율,
                <br />
                성별 분포 등 다양한 CRM 데이터를
                <br />
                그래프로 한누에 볼 수 있어요.
                <br />
              </p>
            </figcaption>
            <div className="relative flex w-full justify-center overflow-hidden">
              <Image
                src="/home/crmFeature.png"
                width={740}
                height={480}
                alt="CRM feature description Image"
                className="lg:absolute lg:bottom-0"
              />
            </div>
          </figure>
        </Flex>
      </section>
    </Flex>
  )
}

const SectionFive = () => {
  return (
    <Flex direction="column" align="center" gap="8" asChild>
      <section className="bg-gray-800 py-[120px]">
        <h2 className="text-center text-[44px] font-bold leading-[64px] text-white">
          지금 <span className="text-primary">착착</span> 사전예약하고
          <br />
          베타테스터로 가장 먼저 이용해 보세요.
        </h2>
        <Flex asChild>
          <Button className="h-auto" asChild>
            <Link href="https://tally.so/r/3lrqD5">
              <Text weight="bold" size="6">
                사전 예약 신청
              </Text>
              <Image src="/rightArrow.svg" alt="right arrow" height={24} width={24} />
            </Link>
          </Button>
        </Flex>
      </section>
    </Flex>
  )
}

export default function Home() {
  return (
    <main className="bg-[#FCFDFF] font-pretendard">
      <Header />
      <div className="mx-auto max-w-[1200px] px-4">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <SectionFive />
    </main>
  )
}

// TODO: Margin Bottom 추가
