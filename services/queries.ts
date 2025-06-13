import { baseApi } from "./api";

type Param = string | string[] | undefined;

export const getSearchResultsFn = async ({
  endDate,
  location,
  startDate,
  minBudget,
  maxBudget,
  type
}: {
  endDate?: Param;
  location?: Param;
  startDate?: Param;
  minBudget?: Param;
  maxBudget?: Param;
  type?: Param
}) => {
  const params: any = {};
  if (location) params.location = location;
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;
  if (minBudget) params.minBudget = minBudget;
  if (maxBudget) params.maxBudget = maxBudget;
  if (type) params.type = type;

  const { data } = await baseApi.get("/hotel/hotels", {
    params,
  });
  return data;
};
