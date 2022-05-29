import {
  RadioGroup,
  RadioGroupProps,
  Stack,
  StackDirection,
  Text,
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

export interface RadioGroupControllerProps extends RadioGroupProps {
  control: Control<any>;
  name: string;
  label?: string;
  children: JSX.Element[];
  direction?: StackDirection;
}

export const RadioGroupController = ({
  control,
  name,
  label,
  children,
  direction,
}: RadioGroupControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <>
            <Text mb="8px" mt="4">
              {label}:
            </Text>
            <RadioGroup onChange={field.onChange} value={field.value}>
              <Stack direction={direction}>{children}</Stack>
            </RadioGroup>
          </>
        );
      }}
    />
  );
};
