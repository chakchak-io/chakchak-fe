"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import supabase from "@/api";

const Page = () => {
  // here we get the access token and the refresh token from the url
  // and store them in cookies
  // after that we redirect customers to the channels page

  const searchParams = useSearchParams();
  const router = useRouter();

  const access_token = searchParams.get("access_token");
  const refresh_token = searchParams.get("refresh_token");

  console.log(
    searchParams.get("access_token"),
    searchParams.get("refresh_token")
  );

  useEffect(() => {
    const setSession = async (access_token: string, refresh_token: string) => {
      // we set the cookies here
      // and redirect to the channels page

      // set cookies
      if (access_token && refresh_token) {
        await supabase.auth.setSession({ access_token, refresh_token });
      }

      // redirect to channels page

      // if url contains a hash, remove it

      router.replace("/channels", { scroll: false });
    };

    if (!access_token || !refresh_token) return;

    setSession(access_token, refresh_token);
  }, [access_token, refresh_token, router]);

  return (
    <div>
      <h1>Welcome to EventFairy!!</h1>
    </div>
  );
};

export default Page;
