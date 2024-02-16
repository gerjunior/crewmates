import Crewmates from '../../assets/crewmates.png';
import { InputCard } from './InputCard';

export const Create = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center gap-10 h-screen'>
      <h3 className='text-5xl font-bold'>Create a New Crewmate</h3>
      <img src={Crewmates} alt='Crewmates' width={300} />

      <div className='flex gap-10'>
        <div className='flex gap-10 flex-row self-start'>
          <InputCard
            name='name'
            title='Name'
            placeholder="Enter crewmate's name"
          />

          <InputCard
            name='speed'
            title='Speed (mph)'
            placeholder='Enter speed in mph'
          />
        </div>

        <div>
          <InputCard
            name='color'
            title='Color'
            type='radio'
            placeholder='Enter speed in mph'
            options={['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White']}
          />
        </div>
      </div>

      <button>Create Crewmate</button>
    </div>
  );
};
