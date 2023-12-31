'use client';

import React, {
  useState,
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { useCookies } from 'react-cookie';
// import { decryptCookie } from '../lib/action';

// i was trying to say hello to the userEmail but mr.salehi said you do not need to do it.

interface ContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userEmail: string;
  setUserEmail: (value: string) => void;
  isPendding: boolean;
  setIsPendding: (value: boolean) => void;
  logOut: () => void;
}

export const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userEmail: '',
  setUserEmail: () => {},
  isPendding: true,
  setIsPendding: () => {},
  logOut: () => {},
});
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isPendding, setIsPendding] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>('');
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  useEffect(() => {
    const fetchUserEmail = async () => {
      if (cookies.user !== undefined) {
        setIsLoggedIn(true);
        // const email = await decryptCookie();
        // setUserEmail(email);
      }
    };

    fetchUserEmail();
  }, [cookies]);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    removeCookie('user');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userEmail,
        setUserEmail,
        logOut,
        isPendding,
        setIsPendding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
