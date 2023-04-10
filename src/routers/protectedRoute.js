import { Navigate} from "react-router-dom";
import React, { useEffect } from 'react'
import UserAuth from "../custom-hooks/userAuth";
import { Outlet } from "react-router-dom";



function ProtectedRoute() {
    const {currentUser} = UserAuth();
    return currentUser ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoute

