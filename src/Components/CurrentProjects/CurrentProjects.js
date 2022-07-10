
import React, { useContext } from "react";
import "./home.css";


// import Header from "./IndexHeader";
// import Body from "./IndexBody";
// import BodyNext from "./BodyNext";
// import VideoGuate from "./VideoGuate";

import ComingSoon from "./ComingSoon"


import { AuthContext } from "../../Context/AuthContext";

function Index () {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <section>
          
          <div className="container-fluid">
                <ComingSoon/>
            </div>
{/*             
            <div className = "container-fluid">
                    <Header/>
            </div>

            <div className="container-fluid">
                <VideoGuate/>
            </div>


            <div className="container-fluid">
                <Body/>
            </div>

            <div className="container-fluid">
                <BodyNext/>
            </div> 
            
*/}
        </section>      
       
    )
}

export default Index;




