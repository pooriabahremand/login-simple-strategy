'use client';

import React, { useState, createContext, FunctionComponent, ReactNode } from 'react';

interface ContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userEmail: string;
  setUserEmail: (value: string) => void;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userEmail: '',
  setUserEmail: () => {},
});
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
