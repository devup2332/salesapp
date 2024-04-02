import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomCard = ({ children, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        "rounded-md p-7 border-solid border-1 bg-secondary-background border-primary-color/30",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default CustomCard;
