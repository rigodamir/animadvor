import { Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { getAnimals } from "../../Services/animalApi";

export interface AnimalSelectorControllerProps {
  control: Control<any>;
  name: string;
  label?: string;
}

export const AnimalSelectController = ({
  control,
  name,
  label,
}: AnimalSelectorControllerProps) => {
  const [animals, setAnimals] = useState<any>([]);
  useEffect(() => {
    getListAnimals();
  }, []);

  const getListAnimals = async () => {
    const listAnimals = await getAnimals(0);

    setAnimals(listAnimals);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <>
            <Text mb="px" mt="4">
              {label}
            </Text>
            <Select
              onChange={field.onChange}
              value={field.value}
              defaultValue={""}
              marginY={2}
              placeholder="Odaberi životinju"
            >
              {animals.map((animal: any) => (
                <option value={animal._id}>{animal.name}</option>
              ))}
            </Select>
          </>
        );
      }}
    />
  );
};
