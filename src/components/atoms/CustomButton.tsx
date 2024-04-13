import { Button, ButtonProps } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps extends ButtonProps { }

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
	return (
		<Button className={twMerge("h-12 w-full", className)} size="sm" {...props}>
			{children}
		</Button>
	);
};

export default CustomButton;
