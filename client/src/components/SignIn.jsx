import { FaFacebookF, FaGoogle, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { request } from '../axios_helper';
export default function SignIn({forgotPassword}){

    const handleSubmit = () => {
        request("POST", "/authenticate", {})
        .then(response => {
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">Sign in Account</h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaFacebookF className="text-sm" />
                </a>
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaLinkedinIn className="text-sm" />
                </a>
                <a href="" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaGoogle className="text-sm" />
                </a>
            </div>
            <p className="text-gray-400 my-3">or use your email account</p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <FaRegEnvelope className="text-gray-400 mr-2" />
                        <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" required/>
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                        <MdLockOutline className="text-gray-400 mr-2" />
                        <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" required />
                    </div>
                    <div className="flex justify-between w-64 mb-5 items-center">
                        <label htmlFor="" className="flex items-center text-xs">
                            <input type="checkbox" name="remember" className="mr-1" />
                            Remember me
                        </label>
                        <a onClick={forgotPassword} className="text-xs">Forgot Password?</a>
                    </div>
                    <button type="submit" className="border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}