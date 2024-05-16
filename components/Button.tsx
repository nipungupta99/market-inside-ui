import { ReactNode } from "react";

const Button = ({
  children,
  className,
  ...otherProps
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <button className={`${className} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
