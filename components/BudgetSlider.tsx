import { useState } from "react";

export default function BudgetSlider() {
  const [minBudget, setMinBudget] = useState(5000);
  const [maxBudget, setMaxBudget] = useState(500000);

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
        <input
          type="range"
          min={5000}
          max={500000}
          step={1000}
          value={minBudget}
          onChange={(e) =>
            setMinBudget(Math.min(Number(e.target.value), maxBudget - 10000))
          }
          className="slider-thumb w-full absolute z-10 appearance-none bg-transparent pointer-events-auto"
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
          className="slider-thumb w-full absolute z-10 appearance-none bg-transparent pointer-events-auto"
        />
        <div className="w-full h-[4px] bg-red-500 rounded absolute top-1/2 transform -translate-y-1/2 z-0"></div>
      </div>

      <button className="bg-green-600 text-white font-semibold text-[13px] rounded-md px-14 py-2 mt-4 hover:bg-green-700">
        Find Affordable hotels
      </button>
    </div>
  );
}
