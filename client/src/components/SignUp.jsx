import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <form className="h-screen flex flex-col justify-center items-center gap-y-4 bg-indigo-700">
        <h1 className="text-white font-bold pt-3">SIGN UP</h1>
        <input
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2"
          placeholder="Username"
        />
        <input
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2"
          placeholder="Email"
        />
        <input
          className="md:w-1/2 lg:w-1/3 bg-gray-100 border-black outline-none border-l-4 p-2"
          placeholder="Password"
        />
        <div className="grid place-items-center ">
          <input
            type="submit"
            className="w-40 bg-indigo-200 text-black font-bold hover:bg-black hover:text-white  p-2"
          />

          <p className="mt-5 gap-x-2 text-center text-sm text-gray-200">
            Already a member?
            <Link to="/" className="p-2 text-white font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
