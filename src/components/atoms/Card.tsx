import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomCard = ({ children, className, ...props }: CardProps) => {
	return (
		<div
			className={twMerge(
				"rounded-2xl p-7 bg-secondary-background border-primary-color/30",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export default CustomCard;
