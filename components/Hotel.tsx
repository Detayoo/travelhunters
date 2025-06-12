import Image from "next/image";

import FiveStarRating from "./Rating";
import { formatMoney } from "@/helpers";
import { HotelData } from "@/types";

export const Hotel = ({ details }: { details: HotelData }) => {
  return (
    <div className="w-full h-[215px] rounded-[10px] flex bg-white">
      <div className="h-full min-w-[150px] relative">
        <Image src={details?.exterior_photo[0]?.imgPath ?? ""} alt="" fill />
      </div>
      <div className="flex flex-col items-start gap-y-2 py-[8px] px-2">
        <p className="font-500">{details?.hotel_name}</p>
        <div className="text-[10px] flex gap-x-[2px] items-center">
          <Image src="/icons/location.jpg" alt="" height={20} width={20} />

          <p>{details?.location_building_address}</p>
        </div>
        <FiveStarRating stars={details?.star_rating ?? 0} />
        {/* <div className="flex gap-x-1 gap-y-4 flex-wrap mt-1">
          {details?.rooms?.   .map((room) => (
            <p
              key={room?.id}
              className="bg-blue-500 px-2 py-[1px] inline-block text-white text-[10px] rounded-[10px]"
            >
              {room?.rooms_amenities}
            </p>
          ))}
        </div> */}
        <div className="flex gap-x-1 gap-y-4 flex-wrap mt-1">
          {[
            ...new Set(
              details?.amenities
                ?.map((a) => a?.amenity?.trim())
                .filter((name) => name)
            ),
          ]
            .slice(0, 4)
            .map((amenity, index) => (
              <p
                key={index}
                className="bg-gray-200 py-[1px] px-2 rounded-[10px] text-[10px]"
              >
                {amenity}
              </p>
            ))}
        </div>
        <p className="font-semibold text-[18px] text-red-400 mt-1">
          ₦{formatMoney(details?.rooms[0]?.rooms_rates_per_night)}
        </p>

        <div className="flex gap-x-2 text-[12px] items-center w-full mt-1">
          <p className="px-4 py-[2px] bg-yellow-200 capitalize rounded-[4px]">
            10% off
          </p>
          <p className="px-4 py-[2px] bg-green-500 text-white capitalize rounded-[4px] ml-auto">
            book now
          </p>
        </div>
      </div>
    </div>
  );
};
