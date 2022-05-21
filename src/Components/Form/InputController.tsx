import { Input, InputProps, Textarea } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

export interface InputControllerProps extends InputProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder: string;
  isTextArea?: boolean;
}

export const InputController = ({
  control,
  name,
  placeholder,
  isTextArea,
  ...props
}: InputControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return !isTextArea ? (
          <Input
            {...props}
            value={field.value}
            backgroundColor="white"
            marginY={2}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
          />
        ) : (
          <Textarea
            value={field.value}
            backgroundColor="white"
            marginY={2}
            onChange={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};
