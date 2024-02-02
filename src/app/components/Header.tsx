import { Flex } from "@radix-ui/themes"
import Link from "next/link"

import BrandLogo from "./BrandLogo"

const Header = () => {
  return (
    <nav className="border-b-grey-100 border-b bg-white px-2 py-[6px]">
      <Flex justify="between" className="m-auto max-w-[1200px]">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
          <span className="font-sourceSansPro text-xl font-semibold text-primary">ChakChak</span>
        </Link>
        <Link href="https://tally.so/r/3lrqD5" className="bg-grey-900 rounded-lg px-4 py-[10px] text-white">
          사전 예약 신청
        </Link>
      </Flex>
    </nav>
  )
}

export default Header
