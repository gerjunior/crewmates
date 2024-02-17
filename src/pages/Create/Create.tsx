import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Crewmates from '../../assets/crewmates.png';
import { InputCard } from './InputCard';
import { createCrewmate } from '../../client';

type Action = { type: string; payload: string };
type CrewmateState = {
  name: string;
  speed: string;
  color: string;
};

const crewmateReducer = (
  state: CrewmateState,
  action: Action,
): CrewmateState => {
  switch (action.type) {
    case 'reset':
      return { name: '', speed: '', color: '' };
    default:
      return { ...state, [action.type]: action.payload };
  }
};

export const Create = () => {
  const [createdCrewmate, setCreatedCrewmate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [crewmate, _dispatch] = useReducer(crewmateReducer, {
    name: '',
    speed: '',
    color: '',
  });

  const dispatch = (data: Action) => {
    if (createdCrewmate) {
      setCreatedCrewmate(null);
    }
    _dispatch(data);
  };

  const handleCreateCrewmate = async () => {
    setIsLoading(true);
    const { error } = await createCrewmate(crewmate);
    if (!error) {
      setCreatedCrewmate(crewmate.name);
      dispatch({ type: 'reset', payload: '' });
    }
    setIsLoading(false);
  };

  const isFormFilled = Object.values(crewmate).every((value) => value);

  return (
    <div className='p-10 flex flex-col items-center justify-center gap-10 h-screen'>
      <h3 className='text-5xl font-bold'>Create a New Crewmate!</h3>
      <img src={Crewmates} alt='Crewmates' width={300} />

      <div className='flex gap-10'>
        <div className='flex gap-10 flex-row self-start'>
          <InputCard
            name='name'
            title='Name'
            placeholder="Enter crewmate's name"
            value={crewmate.name}
            onChange={(e) =>
              dispatch({ type: 'name', payload: e.target.value })
            }
          />

          <InputCard
            name='speed'
            title='Speed (mph)'
            placeholder='Enter speed in mph'
            value={crewmate.speed}
            onChange={(e) =>
              dispatch({ type: 'speed', payload: e.target.value })
            }
          />
        </div>

        <div>
          <InputCard
            name='color'
            title='Color'
            type='radio'
            placeholder='Enter speed in mph'
            options={['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'White']}
            value={crewmate.color}
            onChange={(e) =>
              dispatch({ type: 'color', payload: e.target.value })
            }
          />
        </div>
      </div>

      <button
        onClick={handleCreateCrewmate}
        disabled={isLoading}
        className={`${
          isLoading || !isFormFilled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Create Crewmate
      </button>

      {createdCrewmate && (
        <div className='flex flex-col items-center gap-5'>
          <p className='text-xl'>{createdCrewmate} was created!</p>
          <Link to='/gallery'>View</Link>
        </div>
      )}
    </div>
  );
};
