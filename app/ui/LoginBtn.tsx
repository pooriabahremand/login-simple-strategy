/* eslint-disable react/button-has-type */

'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../Context/context';

export default function LoginBtn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return isLoggedIn ? (
    <button
      onClick={() => {
        setIsLoggedIn(false);
        removeCookie('user');
      }}
    >
      Log out
    </button>
  ) : (
    <Link href="/login">
      <button>Log in</button>
    </Link>
  );
}
