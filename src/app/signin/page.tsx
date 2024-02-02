"use client"
import { Container, Flex } from "@radix-ui/themes"
import Link from "next/link"
import React, { useState } from "react"

import { AppLayout } from "@/components/layout"

import { Button } from "../../components/ui/button"
import FancyInput from "../components/Forms/FancyInput"

const SigninPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main>
      <AppLayout.Header.Make />
      <Flex direction="column" align="center" asChild className="mt-[62px]">
        <h2 className="text-[32px] font-bold leading-[38px]">이메일로 로그인</h2>
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
              className={`rounded-[6px] bg-black transition-all duration-200 hover:bg-black hover:shadow-lg`}
              onClick={() => console.log("clicked")}
            >
              로그인
            </Button>
            <Flex justify="between" className="py-2">
              <div className="text-[14px] font-medium">아직 계정이 없으신가요?</div>
              <Link href="/signup" className="text-[14px] font-medium text-primary hover:opacity-85">
                회원가입
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </main>
  )
}

export default SigninPage
