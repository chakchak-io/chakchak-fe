import { Flex } from "@radix-ui/themes"
import Link from "next/link"
import { FunctionComponent } from "react"

import { BrandLogo } from "@/components/common/icon"

const Skeleton: FunctionComponent<{
  children?: React.ReactNode
}> = ({ children }) => {
  return (
    <nav className="border-b border-b-gray-100 bg-white px-2 py-[6px]">
      <Flex justify="between" className="m-auto max-w-[1200px]">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
          <span className="font-sourceSansPro text-xl font-semibold text-primary">ChakChak</span>
        </Link>
        {children}
      </Flex>
    </nav>
  )
}

const Make = () => {
  return (
    <Skeleton>
      <Link href="https://tally.so/r/3lrqD5" className="rounded-lg bg-gray-900 px-4 py-[10px] text-white">
        사전 예약 신청
      </Link>
    </Skeleton>
  )
}

export { Skeleton, Make }
