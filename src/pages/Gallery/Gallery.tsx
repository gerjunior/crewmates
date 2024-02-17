import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { Card } from './Card/Card';
import { getCrewmates } from '../../client';

const MIN_CREWMATES_TO_SHIP = 10;

export const Gallery = () => {
  const { data: crewmates } = useSWR('crewmates', getCrewmates);
  const averageSpeed = crewmates?.length
    ? Math.round(
        crewmates?.reduce(
          (acc, crewmate) => acc + parseInt(crewmate.speed),
          0,
        ) / crewmates.length,
      )
    : 0;

  return (
    <div className='p-10 flex flex-col justify-center items-center gap-10 h-screen'>
      <h2 className='text-5xl font-bold'>Your Crewmate Gallery!</h2>
      {crewmates?.length && crewmates?.length >= MIN_CREWMATES_TO_SHIP && (
        <div>
          <p className='text-xl'>
            You have{' '}
            <span className='text-2xl font-bold text-blue-500'>
              {crewmates?.length}
            </span>{' '}
            crewmates! You're ready to ship!
          </p>
          <p className='text-xl'>
            The average speed of your crew is{' '}
            <span className='text-2xl font-bold text-blue-500'>
              {averageSpeed} mph
            </span>
          </p>
        </div>
      )}
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
