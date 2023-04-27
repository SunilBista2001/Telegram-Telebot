import AxiosService from "../AxiosService";

export const getProduct = async () => {
  const response = await AxiosService.get("/product");
  return response.data;
};

export const addProduct = async (data) => {
  const response = await AxiosService.post("/product", data);
  return response.data;
};
