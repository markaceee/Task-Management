import { useJwt } from "react-jwt";
import { About } from "../components/About";
import { Account } from "../components/Account";
import ForgotPassword from "../components/ForgotPassword";
import { Home } from "../components/Home";
import Login from "../components/Login";
import { Private } from "../components/Private";
import Register from "../components/Register";
import TaskContent from "../components/TaskContent";
import { getAuthToken } from "../axios_helper";

import React from 'react'

const navigation = () => {
    const nav = [
        { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
        { path:     "/register",    name: "Register",       element: <Register />,      isMenu: false,    isPrivate: false  },
        { path:     "/forgot-password",    name: "ForgotPassword",       element: <ForgotPassword />,      isMenu: false,    isPrivate: false  },
        { path:     "/tasks",         name: "Tasks",        element: <TaskContent />,       isMenu: true,     isPrivate: true  },
        { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
        { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
    ]
  return nav;
  
}

export default navigation