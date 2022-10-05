import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Card({ imageUrl, title, rating, beds, tags, type }) {
  if (beds === null) {
    beds = 1;
  }
  return (
    <div className="basis-3/3 md:basis-1/3 p-1.5 mb-30 w-full flex justify-center flex-col md:p-6">
      <div>
        <img className="object-fill rounded-2xl" src={imageUrl} alt={title} />
      </div>
      <div className="flex items-center py-1.5 gap-1">
        {tags && (
          <p className="border border-light-gray text-light-graylight-gray text-xs rounded px-1.5 py-0.5 cursor-pointer">
            Super Host
          </p>
        )}

        <p className="text-xs text-light-gray">
          {type}, {beds}beds
        </p>
        <div className="flex items-center ml-auto">
          <StarRoundedIcon sx={{ color: "orange" }} />
          <p className="text-sm text-light-gray">{rating}</p>
        </div>
      </div>
      <div>
        <h2 className="text-base text-dark-gray font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
