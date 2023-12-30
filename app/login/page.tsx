import { Metadata } from 'next';
import Login from './Login';

export const metadata: Metadata = {
  title: 'ورود',
  description: 'صفحه ورود ',
};

export default function Page() {
  return <Login />;
}
