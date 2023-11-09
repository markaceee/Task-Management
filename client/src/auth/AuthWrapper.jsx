
import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { removeAuthHeader, request, setAuthHeader } from "../axios_helper";
import { RenderRoutes } from "../structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    const navigate = useNavigate();
    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            request("POST", "/authenticate", {
                email: email,
                password: password
            }).then(response => {
                if (response.data.token) {
                    setAuthHeader(response.data.token);
                    resolve("success");
                }else{
                    reject("Incorrect password")
                }
            }).catch(e => {
                reject("Incorrect password")
                console.log(e)
            })
        })
    }

    const logout = () => {
        removeAuthHeader();
        navigate("/login");
        window.location.reload();
    }


    return (

        <AuthContext.Provider value={{login, logout }}>
            <>
                <RenderRoutes />
            </>
        </AuthContext.Provider>

    )

}