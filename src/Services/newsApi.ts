import api from "./api";

export const getNews = async (pageNumber?: number) => {
  try {
    const { data } = await api.get(`/news/${pageNumber}`);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createNews = async (formData: any) => {
  try {
    const { data } = await api.post("/news", formData);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateNews = async (id: number, formData: any) => {
  try {
    const { data } = await api.put(`/news/${id}`, formData);

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteNews = async (id: any) => {
  try {
    const { data } = await api.delete(`/news/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
};
