import { useLocation, useNavigate } from 'react-router-dom';
import Suspect from '../../assets/suspect.png';
import { Crewmate } from '../../client';

const getSpeedMessage = (speed: string) => {
  const speedNumber = parseInt(speed);
  switch (true) {
    case speedNumber < 20:
      return 'You may want to find a Crewmate with more speed, this one is kind of slow 🙃';
    case speedNumber < 50:
      return 'This Crewmate is a bit slow, but it should be fine';
    case speedNumber < 100:
      return 'This Crewmate is pretty average, nothing special';
    case speedNumber < 150:
      return 'This Crewmate is pretty fast, you should keep it';
    case speedNumber < 200:
      return 'This Crewmate is really fast, you should definitely keep it';
    case speedNumber >= 200:
      return 'This Crewmate is blazing fast, lets gooooooooo!!';
    default:
      return 'This Crewmate is pretty average, nothing special';
  }
};

export const Info = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const crewmate = state as Crewmate;
  const speedMessage = getSpeedMessage(crewmate.speed);

  const handleEditCrewmate = () => {
    navigate(`/edit/${crewmate.id}`, { state: { ...crewmate } });
  };

  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen font-bold'>
      <h2 className='text-5xl'>Crewmate: {crewmate.name}</h2>
      <p className='text-4xl'>Stats</p>
      <div>
        <p className='text-xl'>Speed: {crewmate.speed} mph</p>
        <p className='text-xl'>Color: {crewmate.color}</p>
      </div>

      <div className='flex flex-col gap-5 items-center justify-center'>
        <p className='text-lg'>{speedMessage}</p>
        <button className='font-sans' onClick={handleEditCrewmate}>
          Wanna edit this Crewmate?
        </button>
      </div>
      <img src={Suspect} alt='Crewmate' width={200} />
    </div>
  );
};
