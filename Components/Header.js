import Image from "next/image";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
// import { Search } from "@mui/icons-material";

function Header() {
  const [location, setLocation] = useState("");
  const [guest, setGuest] = useState("");

  return (
    <div className="flex w-full flex-col md:flex-row px-[20px] py-[10px]">
      <div className="w-full md:w-9/12 flex pb-[1rem]">
        <Link href="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="box-border w-full md:w-3/12 flex flex-row items-center py-[0.5rem] px-[0.5rem] shadow justify-evenly text-[14px] text-[#BDBDBD] rounded">
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          className="w-[90px] md:w-[90px] focus:outline-none"
          placeholder="Enter Location"
        />
        <input
          type="text"
          value={guest}
          onChange={(e) => {
            setGuest(e.target.value);
          }}
          className="w-[90px] md:w-[90px] focus:outline-none"
          placeholder="Add guests"
        />
        {/* <Search /> */}
        <SearchIcon sx={{ color: "red" }} />
      </div>
    </div>
  );
}

export default Header;
