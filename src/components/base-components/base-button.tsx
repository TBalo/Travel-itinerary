import { ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  style?: string;
  onClick?: () => void;
};

const BaseButton = ({ children, style, onClick }: BaseButtonProps) => {
  return (
    <button onClick={onClick} className={`rounded-md  ${style}`}>
      {children}
    </button>
  );
};

export default BaseButton;
