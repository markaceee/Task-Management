import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)


  const doLogin = async (e) => {
      e.preventDefault()
      try {
        await login(email, password)
        navigate("/tasks")
        window.location.reload();
      } catch (error) {
        setErrorMessage(error)
      }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center w-full justify-center text-center lg:p-0">
        <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl md:flex-wrap ">
          <div className="SignIn w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Tsukiden Global</span> Solutions Inc.
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 text-green-500">
                Sign in Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <form onSubmit={doLogin}>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5 items-center">
                    <label htmlFor="" className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </label>
                    <Link to={"/forgot-password"} className="text-xs">
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500"
                  >
                    Login
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
            <Link to={"/register"} className="cursor-pointer w-3/4 border-2 border-white rounded-full py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
