import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { Card } from './Card/Card';
import { getCrewmates } from '../../client';

export const Gallery = () => {
  const { data: crewmates } = useSWR('crewmates', getCrewmates);

  return (
    <div className='p-10 flex flex-col justify-center items-center gap-10 h-screen'>
      <h2 className='text-5xl font-bold'>Your Crewmate Gallery!</h2>
      {!crewmates?.length && (
        <>
          <p className='text-xl'>You haven't made a crewmate yet!</p>
          <Link to='/create'>
            <button>Create one here!</button>
          </Link>
        </>
      )}

      {crewmates?.length && (
        <div className='flex gap-10 justify-center flex-wrap overflow-scroll pb-20'>
          {crewmates.map((crewmate) => (
            <Card key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      )}
    </div>
  );
};
