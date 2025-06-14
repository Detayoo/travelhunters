import Image from "next/image";
import { useState } from "react";

import FiveStarRating from "./Rating";
import { formatMoney } from "@/helpers";
import { HotelData } from "@/types";
import { Heart } from "./Heart";

export const Hotel = ({ details }: { details: HotelData }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full min-h-[215px] rounded-[10px] flex bg-white overflow-hidden">
      <div className="min-h-full min-w-[150px] relative">
        <Image
          src={details?.exterior_photo[0]?.imgPath ?? ""}
          alt=""
          fill
          className="object-top object-cover"
          priority
        />
        <div className="absolute top-3 right-2">
          <Heart active={active} toggleActive={() => setActive(!active)} />
        </div>{" "}
      </div>
      <div className="flex flex-col items-start gap-y-2 py-[8px] pl-2 pr-4 flex-1">
        <p className="font-500 capitalize font-[500]">{details?.hotel_name}</p>
        <div className="text-[10px] flex gap-x-[2px] items-center">
          <Image src="/icons/location.jpg" alt="" height={20} width={20} />

          <p>
            {details?.district?.name}, {details?.district?.state?.name}
          </p>
        </div>
        <FiveStarRating stars={details?.star_rating ?? 0} />
        {details?.rooms[0]?.rooms_additional_deals?.length > 0 && (
          <div className="flex flex-col gap-y-3 flex-wrap mt-1">
            {details?.rooms[0]?.rooms_additional_deals
              ?.slice(0, 2)
              .map((room, index) => (
                <p
                  key={index}
                  className="bg-blue-500 text-center px-2 py-[1px] inline-block text-white text-[10px] rounded-[10px]"
                >
                  {room?.subItem}
                </p>
              ))}
          </div>
        )}
        <div className="flex gap-x-1 gap-y-4 flex-wrap mt-1">
          {[
            ...new Set(
              details?.rooms
                ?.flatMap((room) => room?.hotel?.amenities || [])
                .map((a) => a?.amenity?.trim())
                .filter((name) => name)
            ),
          ]
            .slice(-3)
            .map((amenity, index) => (
              <p
                key={index}
                className="bg-gray-200 text-center py-[1px] px-2 rounded-[10px] text-[10px]"
              >
                {amenity}
              </p>
            ))}
        </div>

        <div className="w-full flex mt-1">
          <p className="font-semibold text-[18px] text-red-400">
            ₦
            {details?.rooms[0]?.rooms_rates_per_night
              ? formatMoney(details?.rooms[0]?.rooms_rates_per_night ?? 0)
              : 0.0}
          </p>
          {/* <p className="line-through">{}</p> */}
        </div>

        <div className="flex gap-x-2 text-[12px] items-center w-full mt-1">
          {details?.vat_percentage && (
            <p className="px-4 py-[2px] bg-yellow-200 uppercase rounded-[4px]">
              {details?.vat_percentage}% off
            </p>
          )}
          <p className="px-4 py-[2px] bg-green-500 text-white capitalize rounded-[4px] ml-auto">
            book now
          </p>
        </div>
      </div>
    </div>
  );
};
