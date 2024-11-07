import React from 'react';
import clsx from 'clsx';

const Textbox = React.forwardRef(({ type, onChange, placeholder, value, className, register, name, error }, ref) => {
    return (
        <div className='w-full flex flex-col gap-1'>

            <input
                onChange={onChange}
                defaultValue={value}
                type={type}
                name={name}
                placeholder={placeholder}
                ref={ref}
                {...register}
                aria-invalid={error ? 'true' : 'false'}
                className={clsx(
                    'bg-transparent px-3 py-2.5 2xl:py-3 border',
                    {
                        'border-gray-100': !error,
                        'border-red-500': error,
                    },
                    'placeholder-gray-400 border-gray-200 text-gray-900 outline-none text-base focus:ring-2 ring-[#FF5757]',
                    className // 
                )}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
});

Textbox.displayName = 'Textbox';

export default Textbox;
