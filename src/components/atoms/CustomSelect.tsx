import { Select, SelectItem } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import { useStore } from "../../store";

interface CustomSelectProps {
  label: string;
  className?: string;
  data: {
    value: number;
    label: string;
  }[];
}
const CustomSelect = ({
  label,
  data,
  className,
  ...props
}: CustomSelectProps) => {
  const theme = useStore((state) => state.theme);
  return (
    <Select
      label={label}
      className={className}
      size="sm"
      classNames={{
        trigger: twMerge(
          "border-1 border-solid border-black/30 transition-all",
          theme === "light" ? "bg-white" : "bg-secondary-background",
        ),
      }}
      {...props}
    >
      {data.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
