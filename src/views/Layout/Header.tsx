import { NavLink } from 'react-router-dom';

export const Header = () => {
  const navLinkClassHandler = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-blue-500' : 'text-white';
  };

  return (
    <div className='bg-gray-600 w-64 h-screen'>
      <ul className='flex flex-col gap-14 text-2xl pt-10 text-center'>
        <li>
          <NavLink to='/' className={navLinkClassHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create' className={navLinkClassHandler}>
            Create a Crewmate
          </NavLink>
        </li>
        <li>
          <NavLink to='/gallery' className={navLinkClassHandler}>
            Crewmate Gallery
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
