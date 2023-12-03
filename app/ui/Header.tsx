import Link from 'next/link';
import LoginBtn from './LoginBtn';

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'cyan',
        color: 'white',
        alignItems: 'center',
        height: '50px',
      }}
    >
      <LoginBtn />
      <Link href="/">ریسلو</Link>
    </div>
  );
}
