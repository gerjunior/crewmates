import { Link } from 'react-router-dom';

export const Gallery = () => {
  return (
    <div className='p-10 flex flex-col justify-center items-center gap-10 h-screen'>
      <h2 className='text-5xl font-bold'>Your Crewmate Gallery!</h2>
      <p className='text-xl'>You haven't made a crewmate yet!</p>
      <Link to='/create'>
        <button>Create one here!</button>
      </Link>
    </div>
  );
};
