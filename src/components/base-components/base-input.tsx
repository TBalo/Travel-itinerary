import { ReactNode } from "react";

type BaseInputProps = {
  children: ReactNode;
  inputLabel?: string;
};

const BaseInput = ({ children, inputLabel }: BaseInputProps) => {
  return (
    <div className="relative w-full">
      {inputLabel && (
        <p className="absolute top-[-12px] text-12 text-grey font-bold z-10 bg-white left-[7px]">
          {inputLabel}
        </p>
      )}
      <div className="relative rounded-[4px] px-2 border border-[#0000001F] w-auto flex">
        {children}
      </div>
    </div>
  );
};

export default BaseInput;
