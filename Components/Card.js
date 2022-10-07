import { StarRounded } from "@mui/icons-material";
import Image from "next/image";

function Card({ imageUrl, title, rating, beds, tags, type, city }) {
  if (beds === null) {
    beds = 1;
  }
  return (
    <>
      <div className="basis-3/3 md:basis-1/3 p-1.5 mb-30 w-full flex justify-center flex-col md:p-6">
        <div className="relative w-full h-60">
          <Image
            className="rounded-2xl"
            src={imageUrl}
            layout="fill"
            objectFit="cover"
          />
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
            <StarRounded sx={{ color: "orange" }} />
            <p className="text-sm text-light-gray">{rating}</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-base text-dark-gray font-semibold">
            {title}, {city && city}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Card;
