type InputCardProps = {
  name: string;
  title: string;
  placeholder: string;
  type?: 'text' | 'radio';
  options?: string[];
};

export const InputCard = ({
  name,
  title,
  placeholder,
  type = 'text',
  options,
}: InputCardProps) => {
  return (
    <div className='bg-slate-500 p-5 rounded-xl flex flex-col'>
      <label htmlFor={name} className='text-2xl font-bold p-2'>
        {title}
      </label>
      {type === 'text' ? (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className='w-full p-2 border-2 border-gray-200 rounded-md'
        />
      ) : (
        <div className='flex flex-col'>
          {options?.map((option) => (
            <label key={option} className='flex items-center'>
              <input
                type='radio'
                id={option}
                name={name}
                value={option}
                className='mr-2'
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
