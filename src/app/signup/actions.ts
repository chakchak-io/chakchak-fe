'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { toast } from '@/components/ui/use-toast';
import { createClient } from '@/service/supabase/actions';

import { SignupForm } from './page';

export async function signup(formData: SignupForm) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        organization: formData.organization,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    toast({
      title: 'Need to implement',
      description: 'Signup feature is not implemented yet.',
    });
    return;
  }

  revalidatePath('/', 'layout');
  redirect(`/signup/checkmail?email=${data.email}`);
}
