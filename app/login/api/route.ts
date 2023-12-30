/* eslint-disable no-console */
import { serialize } from 'cookie';
import CryptoJS from 'crypto-js';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error('SECRET_KEY is not defined');
    }
    const ciphertext = CryptoJS.AES.encrypt(email, secretKey).toString();

    // Set cookie
    const cookie = serialize('user', ciphertext, { path: '/' });
    const headers = { 'Set-Cookie': cookie };

    return new Response(JSON.stringify({ status: 'Logged in' }), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ status: error as Error }), { status: 500 });
  }
}
