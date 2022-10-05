import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Card({ imageUrl, title, rating, beds, tags, type }) {
  if (beds === null) {
    beds = 1;
  }
  return (
    <div className="basis-3/3 md:basis-1/3 p-[5px] mb-[30px] w-full flex justify-center flex-col md:p-[25px]">
      <div>
        <img className="object-fill rounded-2xl" src={imageUrl} alt={title} />
      </div>
      <div className="flex items-center py-[5px] gap-1">
        {tags && (
          <p className="border-[1px] border-[#4F4F4F] text-[#4F4F4F] text-[10px] rounded px-[5px] py-[2px] cursor-pointer">
            Super Host
          </p>
        )}

        <p className="text-[12px] text-[#4F4F4F]">
          {type}, {beds}beds
        </p>
        <div className="flex items-center ml-auto">
          <StarRoundedIcon sx={{ color: "orange" }} />
          <p className="text-[14px] text-[#4F4F4F]">{rating}</p>
        </div>
      </div>
      <div>
        <h2 className="text-[16px] text-[#333333] font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
