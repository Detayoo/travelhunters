import { baseApi } from "./api";

type Param = string | string[] | undefined;

export const getSearchResultsFn = async ({
  endDate,
  location,
  startDate,
}: {
  endDate?: Param;
  location?: Param;
  startDate?: Param;
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
