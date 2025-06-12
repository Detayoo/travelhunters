import { Hotel } from "@/components";
import { getSearchResultsFn } from "@/services/queries";
import { useQuery } from "@tanstack/react-query";

import data from "../../data.json";

const Hotels = () => {
  const { data: results } = useQuery({
    queryKey: ["result"],
    queryFn: () => getSearchResultsFn(),
  });

  return (
    <div className="w-[450px] mx-auto">
      <div className="flex flex-col gap-y-4">
        {data?.results?.map((each) => (
          <Hotel key={each?.id} details={each} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
