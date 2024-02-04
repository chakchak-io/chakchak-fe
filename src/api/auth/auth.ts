import supabase from "..";
import { SignupRequestData } from "../../../types/SignupRequestData";

export const signupUser = async (args: SignupRequestData) => {
  const response = await supabase.auth.signUp({
    email: args.email,
    password: args.password,
    options: {
      data: {
        name: args.name,
        organization: args.organization,
      },
      emailRedirectTo: "http://localhost:3000/welcome",
    },
  });

  return response;
};
