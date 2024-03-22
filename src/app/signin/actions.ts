'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { toast } from '@/components/ui/use-toast';
import { createClient } from '@/service/supabase/actions';

import { SigninForm } from './page';

export async function signin(formData: SigninForm) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const sendingData = {
    email: formData.email,
    password: formData.password,
  };

  const { data, error } = await supabase.auth.signInWithPassword(sendingData);

  if (error) {
    toast({
      title: 'signin failed',
      description: '로그인에 실패했습니다. 다시 시도해주세요.',
    });
    return;
  }

  console.log(data);

  revalidatePath('/', 'layout');
  redirect(`/channel`);
}
