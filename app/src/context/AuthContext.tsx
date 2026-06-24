import React, { createContext } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  signIn: () => undefined,
  signOut: () => undefined,
});
