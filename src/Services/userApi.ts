import api from "./api";

export const getUsers = async () => {
  try {
    const { data } = await api.get("/getusers");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addUser = async (formData: any) => {
  try {
    const { data } = await api.post("/register", formData);

    return data;
  } catch (e) {
    console.log(e);
  }
};
