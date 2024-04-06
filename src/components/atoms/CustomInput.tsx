import { Input, InputProps } from "@nextui-org/react";
import { useStore } from "../../store";
import { twMerge } from "tailwind-merge";

interface CustomInputProps extends InputProps {
  label: string;
  type: string;
}
const CustomInput = ({ label, type, ...props }: CustomInputProps) => {
  const theme = useStore((state) => state.theme);
  return (
    <Input
      label={label}
      size="sm"
      type={type}
      classNames={{
        base: twMerge(
          theme === "light" ? "bg-white" : "bg-secondary-background",
          "rounded-xl",
        ),
        inputWrapper: twMerge(
          theme === "light"
            ? "bg-white border-1 border-solid border-black/30"
            : "bg-secondary-background hover:bg-red-500",
        ),
      }}
      {...props}
    />
  );
};

export default CustomInput;
