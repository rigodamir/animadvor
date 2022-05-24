import api from "./api";

export const getAnimals = async (pageNumber?: number, filters?: any) => {
  try {
    const { data } = await api.post(`/getanimals`, {
      filter: filters,
      page: pageNumber,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createAnimal = async (formData: any) => {
  try {
    const { data } = await api.post("/animal", formData);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateAnimal = async (id: number, formData: any) => {
  try {
    const data = await api.put(`/animal/${id}`, formData);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAnimal = async (id: any) => {
  try {
    const { data } = await api.delete(`/animal/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
};
