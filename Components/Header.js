import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import Catalogue from "./Catalogue";
// import { Search } from "@mui/icons-material";

function Header() {
  const [location, setLocation] = useState("");
  const [guest, setGuest] = useState("");

  return (
    <>
      <div className="flex w-full flex-col md:flex-row px-5 py-2.5">
        <div className="w-full md:w-9/12 flex pb-4">
          <Link href="/">
            <img src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="box-border w-full md:w-3/12 flex flex-row items-center py-half px-half shadow justify-evenly text-xs text-dark-white rounded">
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="w-input focus:outline-none"
            placeholder="Enter Location"
          />
          <input
            type="text"
            value={guest}
            onChange={(e) => {
              setGuest(e.target.value);
            }}
            className="w-input focus:outline-none"
            placeholder="Add guests"
          />
          {/* <Search /> */}
          <SearchIcon sx={{ color: "red" }} />
        </div>
      </div>
      <div className="px-5">
        <Catalogue location={location} />
      </div>
    </>
  );
}

export default Header;
