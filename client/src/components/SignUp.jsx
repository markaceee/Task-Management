import { useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { request } from "../axios_helper";
const SignUp = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleSecondName = (event) => {
        setLastName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }


    const register = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        
        if (password === confirmPassword) {
            request("POST", "/register", register)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            setIsPasswordMatch(false)
        }
    }


    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">Register Account</h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            {isPasswordMatch === false && (
                <div className="p-4">
                    <h3 className="underline underline-offset-8 text-red-500">Password not match!</h3>
                </div>)}
            <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <BsFillPersonFill className="text-gray-400 mr-2" />
                        <input type="text" onChange={handleFirstName} name="firstName" placeholder="First name" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <BsFillPersonFill className="text-gray-400 mr-2" />
                        <input type="text" onChange={handleSecondName} name="lastName" placeholder="Last name" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <FaRegEnvelope className="text-gray-400 mr-2" />
                        <input type="email" onChange={handleEmail} name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <MdLockOutline className="text-gray-400 mr-2" />
                        <input type="password" onChange={handlePassword} name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <MdLockOutline className="text-gray-400 mr-2" />
                        <input type="password" onChange={handleConfirmPassword} name="confirmPassword" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <button type="submit" className="cursor-pointer border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500">
                        Sign up
                    </button>
                </form>

            </div>
        </div>
    );
}

export default SignUp;