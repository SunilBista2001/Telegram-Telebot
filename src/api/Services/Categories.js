import AxiosService from "../AxiosService";

export const getCategory = async () => {
  const response = await AxiosService.get("/category");
  return response.data;
};

export const addCategory = async (data) => {
  const response = await AxiosService.post("/category", data);
  return response.data;
};
