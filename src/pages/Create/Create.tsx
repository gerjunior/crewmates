import { useReducer, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CrewmatesImg from '../../assets/crewmates.png';
import PeekingImg from '../../assets/peeking.png';
import { InputCard } from './InputCard';
import { createCrewmate, updateCrewmate, deleteCrewmate } from '../../client';

type Action = { type: string; payload: string | boolean };
type CrewmateState = {
  id?: string;
  name: string;
  speed: string;
  color: string;
  isImpostor: boolean;
  weapon: string;
};

const crewmateReducer = (
  state: CrewmateState,
  action: Action,
): CrewmateState => {
  switch (action.type) {
    case 'reset':
      return { name: '', speed: '', color: '', isImpostor: false, weapon: '' };
    default:
      return { ...state, [action.type]: action.payload };
  }
};

export const Create = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const isUpdate = !!state && !!state.id;

  const crewmateDefault = (state as CrewmateState) || {
    name: '',
    speed: '',
    color: '',
    weapon: '',
    isImpostor: false,
  };

  const [createdCrewmate, setCreatedCrewmate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [crewmate, _dispatch] = useReducer(crewmateReducer, crewmateDefault);

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

  const handleUpdateCrewmate = async () => {
    setIsLoading(true);
    const id = (state as CrewmateState).id!;
    const { error } = await updateCrewmate(id, {
      ...crewmate,
      id,
    });
    if (!error) {
      setCreatedCrewmate(crewmate.name);
    }
    setIsLoading(false);
  };

  const handleDeleteCrewmate = async () => {
    setIsLoading(true);
    const { error } = await deleteCrewmate((state as CrewmateState).id!);
    if (!error) {
      navigate('/gallery');
    }
  };

  const handleConfirmDeletion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm(
      `Are you sure you want to throw out ${crewmate.name} into space?`,
    );
    if (confirmed) {
      handleDeleteCrewmate();
    }
    e.currentTarget.blur();
  };

  const handleToggleCreateImpostor = () => {
    dispatch({ type: 'isImpostor', payload: !crewmate.isImpostor });
  };

  const isFormFilled =
    crewmate.name &&
    crewmate.speed &&
    crewmate.color &&
    (!crewmate.isImpostor || crewmate.weapon);

  const titleText = (() => {
    if (isUpdate) {
      return `Update ${crewmate.name}`;
    }
    if (crewmate.isImpostor) {
      return <span className='text-red-500'>Create Impostor 🔪</span>;
    }
    return 'Create Crewmate';
  })();

  return (
    <>
      <div className='p-10 flex flex-col items-center justify-center gap-10 h-screen'>
        <h3 className='text-5xl font-bold'>{titleText}</h3>
        <img src={CrewmatesImg} alt='Crewmates' width={300} />

        <div className='flex gap-10'>
          <div className='flex gap-10 flex-row self-start'>
            <InputCard
              name='name'
              title='Name'
              placeholder={`Enter ${
                crewmate.isImpostor ? 'impostor' : 'crewmate'
              }'s name`}
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

          {crewmate.isImpostor && (
            <div>
              <InputCard
                name='weapon'
                title='Weapon'
                type='radio'
                value={crewmate.weapon}
                placeholder='Enter secret weapon'
                onChange={(e) =>
                  dispatch({ type: 'weapon', payload: e.target.value })
                }
                options={['Knife', 'Gun', 'Poison', 'Sabotage']}
                color='red'
              />
            </div>
          )}
        </div>

        {!isUpdate && (
          <button
            onClick={handleCreateCrewmate}
            disabled={isLoading}
            className={`${
              isLoading || !isFormFilled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {crewmate.isImpostor ? (
              <span className={'text-red-500'}>Create Impostor</span>
            ) : (
              'Create Crewmate'
            )}
          </button>
        )}

        {isUpdate && (
          <div className='flex flex-row gap-10'>
            <button
              onClick={handleUpdateCrewmate}
              disabled={isLoading}
              className={`${
                isLoading || !isFormFilled
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              Update Crewmate
            </button>

            <button
              onClick={handleConfirmDeletion}
              disabled={isLoading}
              className='text-red-500'
            >
              Throw Out Crewmate
            </button>
          </div>
        )}

        {createdCrewmate && (
          <div className='flex flex-col items-center gap-5'>
            <p className='text-xl'>
              {createdCrewmate} was {isUpdate ? 'updated' : 'created'}!
            </p>
            <Link to='/gallery'>View Gallery</Link>
          </div>
        )}
      </div>
      <img
        src={PeekingImg}
        alt='Peeking Crewmate'
        width={30}
        className='absolute bottom-0 right-0 mb-10 mr-10 cursor-pointer'
        onClick={handleToggleCreateImpostor}
      />
    </>
  );
};
