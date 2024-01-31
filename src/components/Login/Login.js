import React, { useState } from "react";
import { bgImage } from "../../utils/images/imageLink";

const Login = () => {
  const [isSignIngForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIngForm);
  };

  return (
    <div className="loginWrapper  ">
      <div className="   maxWidSm:hidden bg absolute -z-10">
        <img
          src={bgImage}
          alt="netflix-gpt"
          className=" w-screen h-screen  object-cover"
        />
      </div>

      <div className="alignWrapper w-screen h-screen flex">
        <div className="form flex flex-col w-1/2 px-8 py-8 bg-[#000000cc] max-w-[640px] min-w-[300px] m-auto place-items-center maxWidSm:bg-black maxWidSm:w-full maxWidSm:h-full maxWidSm:justify-center maxWidSm:gap-10">
          <h2 className="heading text-2xl my-3 font-bold place-self-start maxWidSm:text-4xl text-white">
            {isSignIngForm ? "Sign In" : "Register"}
          </h2>
          <form action="#" className="flex flex-col w-full">
            {!isSignIngForm && (
              <input
                type="text"
                placeholder="Full-name"
                className="text-white py-2  px-4 rounded-md bg-transparent"
                style={{ border: "1px solid white" }}
              />
            )}
            <br />
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
              className=" bg-red-600 font-bold text-lg mb-4 rounded-md text-white tracking-normal py-2 "
            >
              Log In
            </button>
            {isSignIngForm && (
              <div className=" text-white text-md  text-center mb-4">
                <a href="#" className=" font-semibold">
                  Forgot password ?
                </a>
              </div>
            )}
          </form>

          <div className="signup flex gap-2">
            <p className="text-gray-300">
              {isSignIngForm ? "New to Netflix ?" : "Already registerd"}
            </p>
            <span>
              <a
                href="#"
                className="font-semibold text-white"
                onClick={() => setIsSignInForm(!isSignIngForm)}
              >
                {isSignIngForm ? "Sign up now" : "Register Now"}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
