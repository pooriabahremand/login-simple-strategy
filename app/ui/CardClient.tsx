'use client';

/* eslint-disable react/button-has-type */

import { useContext } from 'react';
import { AuthContext } from '../Context/context';

export default function CardClient() {
  const { isLoggedIn } = useContext(AuthContext);
  // eslint-disable-next-line react/button-has-type

  return (
    <>
      {isLoggedIn ? (
        <button style={{ padding: '8px 16px', backgroundColor: 'cyan', borderRadius: '8px' }}>
          خرید
        </button>
      ) : (
        <p />
      )}
    </>
  );
}
