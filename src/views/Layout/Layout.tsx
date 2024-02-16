import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className='w-screen flex'>
      <Header />
      <div className='w-full bg-zinc-950'>
        <Outlet />
      </div>
    </div>
  );
};
