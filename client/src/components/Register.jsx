import { useState, useEffect } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline, MdRunningWithErrors } from 'react-icons/md';
import { request } from "../axios_helper";
import { Link, useFormAction, useNavigate } from "react-router-dom";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Register = () => {
    const initialValues = {firstName:"", lastName:"", password:"", email:"", confirmPassword:""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    
    const [firstName, setFirstName] = useState("")
    // const [validfirstName, setValidFirstName] = useState(false);
    // const [firstFocus, setFirstFocus] = useState(false);


    const [lastName, setLastName] = useState("")
    // const [validlastName, setValidLastName] = useState(false);
    // const [lastFocus, setlastFocus] = useState(false);

    const [password, setPassword] = useState("")
    // const [validPassword, setValidPassword] = useState(false);
    // const [passwordFocus, setPasswordFocus] = useState(false);

    const [email, setEmail] = useState("")
    // const [validEmail, setValidEmail] = useState(false);
    // const [emailFocus, setEmailFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)
    // const [matchFocus, setMatchFocus] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value});
       
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstName){
            errors.firstName = "First name is required!";
        }
        if(!values.lastName){
            errors.lastName = "Last name is required!";
        }
        if(!values.password){
            errors.password = "Password is required!";
        }else if (!values.password < 4){
            errors.password = "Password must be more than 4 characters";
        }

        if(!values.email){
            errors.email = "Email is required!";
        } else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format"
        }

        if(!values.confirmPassword){
            errors.confirmPassword = "Confirm Password is required!";
        }else if (values.confirmPassword == password){
            errors.confirmPassword = "Password Not Match";
        }

        return errors;
    }

    useEffect(()=> {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);


    const register = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        // if (password === confirmPassword) {
        //     request("POST", "/register", register)
        //         .then(response => {
        //             navigate('/login')
        //             window.location.reload();
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // } else {
        //     setIsPasswordMatch(false)
        // }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center w-full justify-center text-center lg:p-0">
                <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl md:flex-wrap ">
                    <div className="SignIn w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-green-500">Tsukiden Global</span> Solutions Inc 2.0
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold mb-2 text-green-500">Register Account</h2>
                            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                            {isPasswordMatch === false && (
                                <div className="p-4">
                                    <h3 className="underline underline-offset-8 text-red-500">Password not match!</h3>
                                </div>)}
                            <div className="flex flex-col items-center">
                                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (  <div className="ui message success">Signed in Successfully</div> ) : ( <pre> {JSON.stringify(formValues, undefined, 2)}</pre>)} */}
                                   
                                
                                <form onSubmit={handleSubmit}>  
                                
                                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                                        <BsFillPersonFill className="text-gray-400 mr-2" />
                                        <input 
                                        type="text"
                                         onChange={handleChange} 
                                         name="firstName" 
                                         placeholder="First name" 
                                         className="bg-gray-100 outline-none text-sm flex-1" 
                                         value={formValues.firstName} 
                                          
                                         />
                                    </div>
                                    <p>{formErrors.firstName}</p>

                                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                                        <BsFillPersonFill className="text-gray-400 mr-2" />
                                        <input 
                                        type="text" 
                                        onChange={handleChange} 
                                        name="lastName" 
                                        placeholder="Last name" 
                                        className="bg-gray-100 outline-none text-sm flex-1" 
                                        value={formValues.lastName} 
                                         
                                        />
                                    </div>
                                    <p>{formErrors.lastName}</p>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                                        <FaRegEnvelope className="text-gray-400 mr-2" />
                                        <input 
                                        type="text" 
                                        onChange={handleChange}  
                                        name="email" 
                                        placeholder="Email" 
                                        className="bg-gray-100 outline-none text-sm flex-1" 
                                        value={formValues.email} 
                                        />
                                    </div>
                                    <p>{formErrors.email}</p>

                                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                                        <MdLockOutline className="text-gray-400 mr-2" />
                                        <input 
                                        type="password" 
                                        onChange={handleChange}  
                                        name="password" 
                                        placeholder="Password" 
                                        className="bg-gray-100 outline-none text-sm flex-1" 
                                        value={formValues.password} 
                                        
                                         />
                                    </div>
                                    <p>{formErrors.password}</p>

                                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                                        <MdLockOutline className="text-gray-400 mr-2" />
                                        <input 
                                        type="password" 
                                        onChange={handleChange} 
                                        name="confirmPassword" 
                                        placeholder="Confirm Password" 
                                        className="bg-gray-100 outline-none text-sm flex-1" 
                                        value={formValues.confirmPassword} 
                                         
                                        />
                                    </div>
                                    <p>{formErrors.confirmPassword}</p>

                                    <button type="submit" className="cursor-pointer border-2 text-white bg-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:border-green-500">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="SignUp flex flex-col justify-center items-center w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl lg:p-6 md:p-6">
                        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block my-2"></div>
                        <p className="mb-5">Fill up personal information and start journey with us.</p>
                        <Link to={"/login"} className="cursor-pointer w-3/4 border-2 border-white rounded-full py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;