import { Component } from "react";
import { FaRegEnvelope } from 'react-icons/fa';
export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-green-500">Forgot Password</h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                <form>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                            <FaRegEnvelope className="text-gray-400 mr-2" />
                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" required/>
                        </div>
                        <button type="submit" className="border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500">
                            Send Code
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}