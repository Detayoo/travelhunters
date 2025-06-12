import { baseApi } from "./api";

export const getSearchResultsFn = async () => {
  const { data } = await baseApi.get("/hotel/hotels");
  return data;
};
