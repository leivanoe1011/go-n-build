
import React, { useContext } from "react";


import Header from "./IndexHeader";
import Login from "./IndexLogin";
import Body from "./IndexBody";

import { AuthContext } from "../../Context/AuthContext";

function Index () {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <section>
            {/* Header */}
            <div className = "container">
                    <Header/>
            </div>

            {/* Body */}
            <div className="container">
                
                <Body/>

            </div>


            {/* Footer */}
            <div className="container">
                <div className="row">

                </div>
            </div>

        </section>      
       
    )
}

export default Index;




