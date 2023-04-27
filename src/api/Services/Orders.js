import AxiosService from "../AxiosService";

export const getOrders = async () => {
  const response = await AxiosService.get("/orders");
  return response.data;
};
