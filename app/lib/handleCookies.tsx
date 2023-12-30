'use client';

import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../Context/context';

export default function HandleCookies() {
  const [cookies] = useCookies(['user']);
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (cookies.user) {
      setIsLoggedIn(true);
    }
  }, [cookies]);

  return <p />;
}
