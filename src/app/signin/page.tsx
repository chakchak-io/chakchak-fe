"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Flex } from "@radix-ui/themes";
import Header from "../components/Header";
import FancyInput from "../components/Forms/FancyInput";
import { Button } from "../../components/ui/button";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <Header />
      <Flex direction="column" align="center" asChild className="mt-[62px]">
        <h2 className="text-[32px] leading-[38px] font-bold">
          이메일로 로그인
        </h2>
      </Flex>
      <Container size="1">
        <Flex direction="column" gap="6" mt="7">
          <Flex direction="column" align="center">
            <FancyInput
              label="이메일"
              value={email}
              onChange={(newValue: string) => setEmail(newValue)}
              placeHolder="이메일을 입력해주세요."
            />
          </Flex>
          <Flex direction="column" align="center">
            <FancyInput
              label="비밀번호"
              value={password}
              onChange={(newValue) => setPassword(newValue)}
              placeHolder="비밀번호를 입력해주세요."
              type="password"
            />
          </Flex>
          <Flex direction="column" gap="1">
            <Button
              className={`bg-black rounded-[6px] hover:bg-black hover:shadow-lg transition-all duration-200`}
              onClick={() => console.log("clicked")}
            >
              로그인
            </Button>
            <Flex justify="between" className="py-2">
              <div className="font-medium text-[14px]">
                아직 계정이 없으신가요?
              </div>
              <Link
                href="/signup"
                className="text-primary font-medium text-[14px] hover:opacity-85"
              >
                회원가입
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  );
};

export default SigninPage;
