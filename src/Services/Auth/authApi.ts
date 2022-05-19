import api from "../api";

export const loginAuth = async (form: any) => {
  try {
    const { data } = await api.post("/login", form);

    return data;
  } catch {
    return null;
  }
};
