import { useNavigate } from 'react-router-dom';
import EmptyCrewmate from '../../../assets/empty-crewmate.png';
import { CrewmateAttribute } from './CrewmateAttribute';

type CardProps = {
  crewmate: {
    id: string;
    name: string;
    speed: string;
    color: string;
  };
};

export const Card = ({ crewmate }: CardProps) => {
  const navigate = useNavigate();

  const handleClickEditCrewmate = () => {
    navigate(`/edit/${crewmate.id}`, { state: { ...crewmate } });
  };

  const handleClickIcon = () => {
    navigate(`/info/${crewmate.id}`, { state: { ...crewmate } });
  };

  const { name, speed, color } = crewmate;

  const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);
  const lowercaseColor = color.toLowerCase();
  const shadowColor =
    lowercaseColor === 'white' ? 'white' : `${lowercaseColor}-500`;

  return (
    <div
      className={`flex flex-col gap-5 bg-slate-700 p-10 rounded-3xl items-center w-96 shadow-lg shadow-${shadowColor}`}
    >
      <img
        src={EmptyCrewmate}
        alt='Crewmate'
        width={200}
        className='rounded-full bg-slate-500 p-2 cursor-pointer hover:opacity-60 transition-opacity duration-300'
        onClick={handleClickIcon}
      />
      <CrewmateAttribute title='Name of Crewmate' value={name} />
      <CrewmateAttribute title='Speed of Crewmate' value={`${speed} mph`} />
      <CrewmateAttribute title='Color of Crewmate' value={capitalizedColor} />
      <button
        onClick={handleClickEditCrewmate}
        className='hover:opacity-70 transition-opacity duration-300 hover:border-white'
      >
        Edit Crewmate
      </button>
    </div>
  );
};
