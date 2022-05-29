import api from "./api";

export const uploadImage = async (image: any) => {
  try {
    const bodyFormData = new FormData();
    bodyFormData.append("image", image);

    const { data } = await api.post("/image", bodyFormData);

    return data;
  } catch (error) {
    console.log(error);
  }
};
