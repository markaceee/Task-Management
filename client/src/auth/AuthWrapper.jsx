
import { createContext, useContext } from "react";
import { removeAuthHeader, request, setAuthHeader } from "../axios_helper";
import { RenderMenu, RenderRoutes } from "../structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
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
        window.reload();
    }


    return (

        <AuthContext.Provider value={{login, logout }}>
            <>
                <RenderMenu />
                <RenderRoutes />
            </>
        </AuthContext.Provider>

    )

}