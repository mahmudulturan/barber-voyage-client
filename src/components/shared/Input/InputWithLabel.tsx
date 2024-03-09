import React from "react";

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    ref?: React.Ref<HTMLInputElement>;
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(({ placeholder, id, name, type, ...props }, ref) => {
    return (
        <div className="relative z-0 w-full group">
            <input type={type} name={name} id={id} ref={ref} {...props} className="block py-3 px-2 w-full text-base text-black bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primaryCol peer border-2 border-primaryCol rounded-md"
                placeholder=" " />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-base px-1 text-black duration-300 transform -translate-y-6 scale-80 top-[11px] origin-[0] peer-focus:start-3 start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black/90 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-[24px] bg-bgCol cursor-text">
                {placeholder}
            </label>
        </div>
    );
});

export default InputWithLabel;