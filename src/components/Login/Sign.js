import React from "react";

const Sign = () => {
  return (
    <form action="#" className="flex flex-col w-full">
      <input
        type="text"
        placeholder="Email or Phone-number"
        className="text-white py-2  px-4 rounded-md bg-transparent"
        style={{ border: "1px solid white" }}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        className="text-white py-2 px-4 rounded-md bg-transparent"
        style={{ border: "1px solid white" }}
      />
      <br />
      <button
        type="submit"
        className=" bg-red-600 font-bold text-lg rounded-md text-white tracking-normal py-2 "
      >
        Log In
      </button>
      <div className=" text-white text-md  text-center my-4">
        <a href="#" className=" font-semibold">
          Forgot password ?
        </a>
      </div>
    </form>
  );
};

export default Sign;
