import Suspect from '../../assets/suspect.png';

export const Info = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen font-bold'>
      <h2 className='text-5xl'>Crewmate: harry</h2>
      <p className='text-4xl'>Stats</p>
      <div>
        <p className='text-xl'>Speed: 5 mph</p>
        <p className='text-xl'>Color: red</p>
      </div>

      <div className='flex flex-col gap-5 items-center justify-center'>
        <p className='text-lg'>
          You may want to find a Crewmate with more speed, this one is kind of
          slow 🙃
        </p>
        <button className='font-sans'>Wanna edit this Crewmate?</button>
      </div>
      <img src={Suspect} alt='Crewmate' width={200} />
    </div>
  );
};
