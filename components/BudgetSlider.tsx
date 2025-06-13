import { useEffect } from "react";
import { useRouter } from "next/router";
export default function BudgetSlider({
  minBudget,
  maxBudget,
  setMinBudget,
  setMaxBudget,
}: {
  minBudget: number;
  maxBudget: number;
  setMinBudget: (value: number) => void;
  setMaxBudget: (value: number) => void;
}) {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (!minBudget && !maxBudget) return;
    if (minBudget) query.minBudget = minBudget.toString();
    if (maxBudget) query.maxBudget = maxBudget.toString();
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...query,
      },
    });
  }, [minBudget, maxBudget]);

  return (
    <div className="border border-gray-200 p-4 rounded-[10px] text-center bg-white">
      <h2 className="font-semibold text-[14px] mb-3">
        Filter according to your budget
      </h2>
      <div className="flex justify-between text-[13px] font-medium mb-1 px-2">
        <span>from ₦{minBudget.toLocaleString()}</span>
        <span>to ₦{maxBudget.toLocaleString()}</span>
      </div>

      <div className="relative h-8 flex items-center justify-between px-2">
        <div className="w-full h-[4px] bg-red-500 rounded absolute top-1/2 transform -translate-y-1/2 z-0"></div>
        <input
          type="range"
          min={5000}
          max={500000}
          step={1000}
          value={minBudget}
          onChange={(e) =>
            setMinBudget(Math.min(Number(e.target.value), maxBudget - 10000))
          }
          className="slider-thumb w-full z-40 appearance-none bg-transparent pointer-events-auto"
        />
        <input
          type="range"
          min={5000}
          max={500000}
          step={1000}
          value={maxBudget}
          onChange={(e) =>
            setMaxBudget(Math.max(Number(e.target.value), minBudget + 10000))
          }
          className="slider-thumb w-full z-20 appearance-none bg-transparent pointer-events-auto"
        />
      </div>

      <button className="bg-green-600 text-white font-semibold text-[13px] rounded-md px-14 py-2 mt-4 hover:bg-green-700">
        Find Affordable hotels
      </button>
    </div>
  );
}
