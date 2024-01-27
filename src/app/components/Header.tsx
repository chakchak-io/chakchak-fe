import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

const Header = () => {
  return (
    <nav className="border-b px-2 py-[6px] border-b-grey-100 bg-white">
      <Flex justify="between" className="max-w-[1200px] m-auto">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
          <span className="text-primary-2-300 font-semibold font-sourceSansPro text-xl">
            ChakChak
          </span>
        </Link>
        <Link
          href="https://tally.so/r/3lrqD5"
          className="bg-grey-900 text-white px-4 py-[10px] rounded-lg"
        >
          사전 예약 신청
        </Link>
      </Flex>
    </nav>
  );
};

export default Header;
