import React from "react";
import Header from "../Header/Header";
import Routers from "../routers/routers";
import AdminNav from "../admin/AdminNav";

import { useLocation } from "react-router-dom";




const  Layout=()=>{

    const location = useLocation()





    return(
        <>
            {
                location.pathname.startsWith("/dashboard")?(<AdminNav/>):(<Header/>)
            }
            <div>
                <Routers/>
            </div>
        
        </>
    )
}

export default Layout;