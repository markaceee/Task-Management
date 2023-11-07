import { About } from "../components/About";
import { Account } from "../components/Account";
import ForgotPassword from "../components/ForgotPassword";
import { Home } from "../components/Home";
import Login from "../components/Login";
import { Private } from "../components/Private";
import Register from "../components/Register";

export const nav = [
    { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
    { path:     "/about",    name: "About",       element: <About />,      isMenu: true,     isPrivate: false  },
    { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
    { path:     "/register",    name: "Register",       element: <Register />,      isMenu: false,    isPrivate: false  },
    { path:     "/forgot-password",    name: "ForgotPassword",       element: <ForgotPassword />,      isMenu: false,    isPrivate: false  },
    { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
    { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
]