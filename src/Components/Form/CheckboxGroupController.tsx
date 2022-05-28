import { CheckboxGroup, CheckboxGroupProps, Text } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

export interface CheckboxGroupControllerProps extends CheckboxGroupProps {
  control: Control<any>;
  name: string;
  label?: string;
  children: JSX.Element[] | JSX.Element;
}

export const CheckboxGroupController = ({
  control,
  name,
  label,
  children,
  ...props
}: CheckboxGroupControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <>
            <Text mb="8px" mt="4">
              {label}
            </Text>
            <CheckboxGroup
              onChange={field.onChange}
              value={field.value}
              {...props}
            >
              {children}
            </CheckboxGroup>
          </>
        );
      }}
    />
  );
};
