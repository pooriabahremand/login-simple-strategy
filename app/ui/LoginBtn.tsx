/* eslint-disable react/button-has-type */

'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../Context/context';

export default function LoginBtn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <button
      onClick={() => {
        setIsLoggedIn(false);
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
