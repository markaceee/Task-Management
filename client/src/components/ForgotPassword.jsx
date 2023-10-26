import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center w-full justify-center text-center lg:p-0">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl md:flex-wrap ">
          <div className="SignIn w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">WSWSWS</span>wswsws
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 text-green-500">
                Forgot Password
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <form>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500"
                  >
                    Send Code
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="SignUp flex flex-col justify-center items-center w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl lg:p-6 md:p-6">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block my-2"></div>
            <p className="mb-5">
              Fill up personal information and start journey with us.
            </p>
            <a className="cursor-pointer w-3/4 border-2 border-white rounded-full py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
