import Crewmates from '../../assets/crewmates.png';
import Spaceship from '../../assets/spaceship.png';

export const Home = () => {
  return (
    <div className=' p-20 flex flex-col items-center gap-10'>
      <h2 className='text-5xl font-bold'>Welcome to the Crewmate Creator!</h2>
      <p>
        Here is where you can create your very own set of crewmates before
        sending them off into space!
      </p>
      <img src={Crewmates} alt='Crewmates' width={500} />
      <img
        src={Spaceship}
        alt='Spaceship'
        width={500}
        style={{ objectFit: 'cover', width: '450px', height: 'auto' }}
      />
    </div>
  );
};
