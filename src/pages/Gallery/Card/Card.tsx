import EmptyCrewmate from '../../../assets/empty-crewmate.png';
import { CrewmateAttribute } from './CrewmateAttribute';

type CardProps = {
  name: string;
  speed: string;
  color: string;
};

export const Card = ({ name, speed, color }: CardProps) => {
  return (
    <div className='flex flex-col gap-5 bg-slate-700 p-10 rounded-3xl items-center w-96'>
      <img src={EmptyCrewmate} alt='Crewmate' width={200} />
      <CrewmateAttribute title='Name of Crewmate' value={name} />
      <CrewmateAttribute title='Speed of Crewmate' value={`${speed} mph`} />
      <CrewmateAttribute title='Color of Crewmate' value={color} />
      <button>Edit Crewmate</button>
    </div>
  );
};
