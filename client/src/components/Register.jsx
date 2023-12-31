import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { request } from "../axios_helper";
import { Link, useNavigate } from "react-router-dom";
const Register = ({ decodedToken, isExpired }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleSecondName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const register = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      request("POST", "/register", register)
        .then((response) => {
          navigate("/login");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsPasswordMatch(false);
    }
  };

  useEffect(() => {
    if (decodedToken) {
      if (!isExpired) {
        console.log("test");
        navigate(-1);
      }
    }
  }, [decodedToken, isExpired, navigate]);

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
                Register Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              {isPasswordMatch === false && (
                <div className="p-4">
                  <h3 className="underline underline-offset-8 text-red-500">
                    Password not match!
                  </h3>
                </div>
              )}
              <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit}>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <BsFillPersonFill className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      onChange={handleFirstName}
                      name="firstName"
                      placeholder="First name"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <BsFillPersonFill className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      onChange={handleSecondName}
                      name="lastName"
                      placeholder="Last name"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      onChange={handleEmail}
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      onChange={handlePassword}
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      onChange={handleConfirmPassword}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="SignUp flex flex-col justify-center items-center w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl lg:p-6 md:p-6">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block my-2"></div>
            <p className="mb-5">
              Fill up personal information and start journey with us.
            </p>
            <Link
              to={"/login"}
              className="cursor-pointer w-3/4 border-2 border-white rounded-full py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
