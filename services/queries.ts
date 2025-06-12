import { baseApi } from "./api";

export const getHotelsFn = async () => {
  const { data } = await baseApi.get("/hotel/hotels");
  return data;
};
