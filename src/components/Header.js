import React from "react";
import netflixLogo from "../utils/images/netflix-logo.png"; // Import the image

const Header = () => {
  return (
    <div className="headerWrapper absolute z-10 w-full bg-gradient-to-l from-transparent to-black">
      <div className="img relative mx-10 my-2 ">
        <img src={netflixLogo} alt="Netflix Logo" className=" w-28 relative" />
      </div>
    </div>
  );
};

export default Header;
