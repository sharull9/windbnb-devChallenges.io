import React, { useEffect, useState } from "react";
import Card from "./Card";

function Catalogue() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("/api/hotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  console.log(hotels);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[18px] font-semibold">
          Stays in {hotels[0]?.country}
        </p>
        <p className="text-[14px] text-[#4F4F4F] flex justify-center items-center">
          {hotels.length}+ stays
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 items-start"> */}
      <div className="flex flex-wrap items-start">
        {hotels?.map((hotel, id) => (
          <Card
            key={id}
            imageUrl={hotel.photo}
            title={hotel.title}
            rating={hotel.rating}
            beds={hotel.beds}
            tags={hotel.superHost}
            type={hotel.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
