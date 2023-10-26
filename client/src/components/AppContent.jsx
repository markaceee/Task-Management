import { Component } from "react";
import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default class AppContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "login"
        }
    };

    register = () => {
        this.setState({ componentToShow: "register" })
    };

    login = () => {
        this.setState({ componentToShow: "login" })
    }

    forgotPassword = () => {
        this.setState({ componentToShow: "forgot_password" })
    }

    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <div className="flex items-center w-full justify-center text-center lg:p-0">
                    <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl md:flex-wrap ">
                        <div className="SignIn w-3/5 p-5">
                            <div className="text-left font-bold">
                                <span className="text-green-500">WSWSWS</span>wswsws
                            </div>

                            {this.state.componentToShow === "login" && <SignIn forgotPassword={this.forgotPassword} />}
                            {this.state.componentToShow === "register" && <SignUp />}
                            {this.state.componentToShow === "forgot_password" && <ForgotPassword />}

                        </div>
                        <div className="SignUp flex flex-col justify-center items-center w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl lg:p-6 md:p-6">
                            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                            <div className="border-2 w-10 border-white inline-block my-2"></div>
                            <p className="mb-5">Fill up personal information and start journey with us.</p>
                            <a onClick={this.state.componentToShow === "login" ? this.register : this.login} className="cursor-pointer w-3/4 border-2 border-white rounded-full py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
                                {this.state.componentToShow === "login" ? "Sign Up" : "Login"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}