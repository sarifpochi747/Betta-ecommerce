import { Navigate} from "react-router-dom";
import React from 'react'
import UserAuth from "../custom-hooks/userAuth";




function ProtectedRoute({children}) {
    const {currentUser} = UserAuth();

    return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedRoute