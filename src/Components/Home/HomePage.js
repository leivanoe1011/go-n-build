
import React, { useContext } from "react";
import "./home.css";


import Header from "./IndexHeader";
import Body from "./IndexBody";
import BodyNext from "./BodyNext";
import End from "./IndexEnd";

import { AuthContext } from "../../Context/AuthContext";

function Index () {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <section>
            {/* Header */}
            <div className = "container-fluid">
                    <Header/>
            </div>

            {/* Body */}
            <div className="container-fluid">
                
                <Body/>

            </div>

            <div className="container-fluid">
                
                <BodyNext/>

            </div>

            {/* Footer */}
            <div className="container-fluid">
                <End/>
            </div>

        </section>      
       
    )
}

export default Index;




