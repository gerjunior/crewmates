type CrewmateAttributeProps = {
  title: string;
  value: string;
};

export const CrewmateAttribute = ({ title, value }: CrewmateAttributeProps) => {
  return (
    <div className='flex self-start items-center'>
      <p className='text-lg font-bold mr-2'>{title}: </p>
      <p className='bg-slate-400 p-1 overflow-auto rounded-lg text-black text-lg'>
        {value}
      </p>
    </div>
  );
};
