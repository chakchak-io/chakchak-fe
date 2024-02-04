// Hook for auth logic only
// @WARNING: This hook is not for validation check or any other logic

import { useCallback } from 'react';

// pure auth logic only
export function useAuth() {
  const login = useCallback(() => {
    console.warn('Implement: login');
  }, []);

  const logout = useCallback(() => {
    console.warn('Implement: logout');
  }, []);

  const register = useCallback(() => {
    console.warn('Implement: register');
  }, []);

  const validate = useCallback(() => {
    console.warn('Implement: validate');
  }, []);

  return {
    login,
    logout,
    register,
    validate,
  };
}
