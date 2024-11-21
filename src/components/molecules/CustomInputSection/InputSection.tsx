import React from 'react';

const InputSection = ({text , type , placeholder , classname}:{text:string, type:string, placeholder:string , classname:string}) => {
  return (
    <div>
           <div className="relative mb-4 w-full">
                 <p className="text-[14px] font-[700]">{text}</p>
                <input
                  type={type}
                  placeholder={placeholder}
                  className={`w-full border-b bg-transparent p-0 text-[14px] font-semibold text-[#ededed] transition-colors duration-200 ease-in-out focus:border-[#d16527] focus:outline-none ${classname}`}
                 />
             </div>
    </div>
  );
};

export default InputSection;