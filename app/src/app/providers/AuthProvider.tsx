import React, { useEffect, useMemo, useState, type ReactNode } from 'react';

import { AuthContext, type AuthContextValue } from '../../context/AuthContext';
import { clearAuthToken, getAuthToken, saveAuthToken } from '../../services/storage/authStorage';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthContextValue['user']>(null);

  useEffect(() => {
    void (async () => {
      const storedToken = await getAuthToken();

      if (storedToken) {
        setIsAuthenticated(true);
        setUser({ id: 'local-user', name: 'Usuário', email: 'user@example.com' });
      }

      setIsLoading(false);
    })();
  }, []);

  const signIn = () => {
    void saveAuthToken('authenticated');
    setIsAuthenticated(true);
    setUser({ id: 'local-user', name: 'Usuário', email: 'user@example.com' });
  };

  const signOut = () => {
    void clearAuthToken();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = useMemo<AuthContextValue>(
    () => ({ isAuthenticated, isLoading, user, signIn, signOut }),
    [isAuthenticated, isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
