import { useEffect } from "react";
import { useJwt } from "react-jwt";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { getAuthToken, removeAuthHeader } from "../axios_helper";
import { nav } from "./navigation";

export const RenderRoutes = () => {
    
    const { decodedToken, isExpired } = useJwt(getAuthToken() ? getAuthToken() : "");

    useEffect(() => {
        if(isExpired){
            removeAuthHeader();
        }
    }, [isExpired])

    return (
        <Routes>
            {nav.map((r, i) => {
                if (r.isPrivate && !isExpired) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else if (!r.isPrivate && isExpired) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else
                    return <Route key={i} path="*" element={<Navigate to="/login" replace />}/>
            })}
        </Routes>
    )
}

export const RenderMenu = () => {

    const { logout } = AuthData()
    const { decodedToken, isExpired } = useJwt(getAuthToken() ? getAuthToken() : "");

    // const MenuItem = ({ r }) => {
    //     return (
    //         <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
    //     )
    // }

    return (
        <div className="menu">
            {/* {nav.map((r, i) => {
                if (!r.isPrivate && r.isMenu) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else if (r.isMenu && !isExpired) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else return false
            })} */}

            {/* {!isExpired ?
                <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
                :
                <div className="menuItem"><Link to={'login'}>Log in</Link></div>} */}
        </div>
    )
}