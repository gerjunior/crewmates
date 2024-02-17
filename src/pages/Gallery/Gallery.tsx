import { Link } from 'react-router-dom';
import { Card } from './Card/Card';

const crewmates = [
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'red',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'blue',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'green',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'white',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'pink',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'blue',
  },
  {
    name: 'Crewmate 1',
    speed: '3',
    color: 'green',
  },
  {
    name: 'Crewmate 1asdfjasdfkajsdf;lajsdf',
    speed: '3',
    color: 'yellow',
  },
];

export const Gallery = () => {
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
          {crewmates.map((crewmate, index) => (
            <Card
              key={index}
              color={crewmate.color}
              name={crewmate.name}
              speed={crewmate.speed}
            />
          ))}
        </div>
      )}
    </div>
  );
};
