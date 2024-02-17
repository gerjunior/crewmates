type InputCardProps = {
  name: string;
  title: string;
  placeholder: string;
  type?: 'text' | 'radio';
  options?: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputCard = ({
  name,
  title,
  placeholder,
  type = 'text',
  options,
  value,
  onChange,
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
          value={value}
          className='w-full p-2 border-2 border-gray-200 rounded-md'
          onChange={onChange}
        />
      ) : (
        <div className='flex flex-col'>
          {options?.map((option) => (
            <label key={option} className='flex items-center select-none'>
              <input
                type='radio'
                id={option}
                name={name}
                value={option}
                checked={value === option}
                className='mr-2'
                onChange={onChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
