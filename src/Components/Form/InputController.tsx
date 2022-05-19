import { Input, InputProps } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

export interface InputControllerProps extends InputProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder: string;
}

export const InputController = ({
  control,
  name,
  placeholder,
  ...props
}: InputControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Input
            backgroundColor="white"
            marginY={2}
            {...props}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};
