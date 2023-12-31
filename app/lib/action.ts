'use server';

import { cookies } from 'next/headers';
import CryptoJS from 'crypto-js';

export async function decryptCookie() {
  const cookieStore = cookies();

  const user = cookieStore.get('user');
  const secretKey = process.env.SECRET_KEY;
  let returnedText: string;
  if (user?.value !== undefined) {
    const bytes = CryptoJS.AES.decrypt(user?.value, secretKey as string);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    returnedText = `${originalText}`;
  } else {
    returnedText = '';
  }

  return returnedText;
}
