import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { useSupabaseBrowser } from '../useSupabaseBrowser';

export const useUser = () => {
  const [user, setUser] = useState<User>();
  const supabase = useSupabaseBrowser();

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      }
    };
    fetchUserData();
  }, []);

  return { user };
};
