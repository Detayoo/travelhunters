import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { getSearchResultsFn } from "@/services/queries";
import { Hotel } from "@/components";
import data from "../../data.json";
import BudgetSlider from "@/components/BudgetSlider";

const filterables = ["Hotel", "Double Bed", "Apartments", "English"];

const Hotels = () => {
  const router = useRouter();
  const params = router.query;
  const locationRef = useRef(null);
  const [location, setLocation] = useState(params?.location);
  const [minBudget, setMinBudget] = useState(5000);
  const [maxBudget, setMaxBudget] = useState(500000);
  const [showFilter, setShowFilter] = useState(false);
  const [filterObj, setFilterObj] = useState<{
    name: string[] | null | undefined;
    priceTo: string | null;
    priceFrom: string | null;
  }>({
    name: null,
    priceFrom: null,
    priceTo: null,
  });
  const { data: results } = useQuery({
    queryKey: ["result", params, location],
    queryFn: () =>
      getSearchResultsFn({
        endDate: params?.endDate,
        location: location,
        startDate: params?.startDate,
      }),
  });

  // const jsonData = data?.results?.filter((each) =>
  //   each?.rooms?.find((room) =>
  //     room?.hotel?.district?.name
  //       ?.toLowerCase()
  //       ?.includes(params?.location?.toString())
  //   )
  // );

  useEffect(() => {
    if (params?.location) {
      locationRef.current.value = params?.location?.toString();
    }
  }, [params?.location]);

  const handleInputSubmission = (e) => {
    e?.preventDefault();
    if (locationRef.current) {
      setLocation(locationRef.current.value);
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          location: locationRef.current.value,
        },
      });
    }
  };

  return (
    <div className="max-w-[450px] 2xs:w-full px-4 mx-auto pt-7">
      <form
        onSubmit={handleInputSubmission}
        className="flex flex-col gap-y-7 bg-white rounded-[10px] outline-1 outline-gray-200 p-4 "
      >
        <div className="flex items-center gap-x-2 border border-gray-200 rounded-[10px] px-3">
          <Image src="/icons/location.jpg" alt="" height={30} width={30} />
          <div className="py-2 flex flex-col">
            <p className="text-[12px]">Where are you going?</p>
            <input
              ref={locationRef}
              type="text"
              className="outline-none placeholder:text-[14px]"
              placeholder="Name or destination"
            />
          </div>{" "}
        </div>

        <button
          className="bg-green-500 h-11 w-full flex items-center justify-center rounded-[10px] text-[18px] font-[600] gap-x-2 text-white cursor-pointer"
          type="submit"
        >
          <Image src="/search.png" alt="" height={20} width={20} className="" />
          Search
        </button>
      </form>
      <button
        onClick={() => setShowFilter(!showFilter)}
        type="button"
        className="w-full bg-white border border-gray-200 text-center h-11 rounded-[10px] text-[12px] my-4 cursor-pointer"
      >
        Sort Types
      </button>

      {showFilter && (
        <>
          <div className="mb-4 flex flex-col gap-y-4 bg-white p-4 border border-gray-200 rounded-[10px]">
            <p className="text-sm font-medium">Popular filters</p>
            <div className="flex flex-wrap gap-y-4">
              {filterables?.map((each) => (
                <div key={each} className="flex gap-x-2 w-1/3 text-[10px]">
                  <input
                    className="accent-black"
                    type="checkbox"
                    checked={filterObj?.name?.includes(each)}
                    value={each}
                    onClick={() => {
                      if (filterObj?.name?.includes(each)) {
                        setFilterObj({
                          ...filterObj,
                          name: filterObj?.name?.filter(
                            (name) => name !== each
                          ),
                        });
                      } else {
                        setFilterObj({
                          ...filterObj,
                          name: [...(filterObj.name || []), each],
                        });
                      }
                    }}
                  />
                  {each}
                </div>
              ))}
            </div>
          </div>
          <BudgetSlider
            minBudget={minBudget}
            maxBudget={maxBudget}
            setMinBudget={setMinBudget}
            setMaxBudget={setMaxBudget}
          />
        </>
      )}
      <div className="flex flex-col gap-y-4 mt-4">
        {data?.results?.map((each: any) => (
          <Hotel key={each?.id} details={each} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
