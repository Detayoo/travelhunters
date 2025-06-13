import { baseApi } from "./api";

export const getSearchResultsFn = async ({
  endDate,
  location,
  startDate,
}: {
  endDate?: string;
  location?: string;
  startDate?: string;
}) => {
  const params: any = {};
  if (location) params.location = location;
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;
  const { data } = await baseApi.get("/hotel/hotels", {
    params,
  });
  return data;
};
