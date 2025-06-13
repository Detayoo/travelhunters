import { baseApi } from "./api";

type Param = string | string[] | undefined;

export const getSearchResultsFn = async ({
  endDate,
  location,
  startDate,
  minBudget,
  maxBudget,
}: {
  endDate?: Param;
  location?: Param;
  startDate?: Param;
  minBudget?: Param;
  maxBudget?: Param;
}) => {
  const params: any = {};
  if (location) params.location = location;
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;
  if (minBudget) params.minBudget = minBudget;
  if (maxBudget) params.maxBudget = maxBudget;

  const { data } = await baseApi.get("/hotel/hotels", {
    params,
  });
  return data;
};
