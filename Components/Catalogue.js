import React, { useEffect, useState } from "react";
import Card from "./Card";

function Catalogue({location, guest}) {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("/api/hotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  console.log(hotels.filter((hotel)=> hotel.city.toLowerCase().includes(location)));

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">
          Stays in {hotels[0]?.country}
        </p>
        <p className="text-sm text-light-gray flex justify-center items-center">
          {hotels.length}+ stays
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 items-start"> */}
      <div className="flex flex-wrap items-start">
        {hotels?.filter((hotel)=> hotel.city.toLowerCase().includes(location)).map((hotel, id) => (
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
