
import React from "react";

function Header () {

    const poorKidImage = require("../../img/poorKidImage_25Percent.jpg").default;

    return (
        <>
                <div className="row justify-content-lg-center wow animate__animated animate__fadeInLeft animate__slower">
                
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <img src={poorKidImage}/>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <h1 className="display-4">ABOUT USs</h1>
                        <p className="lead">Go and Build it’s an organization committed to improve health and safety living conditions for families in extreme poverty, through the construction of sustainable homes; providing a secure and dignified place to live.</p>
                    </div>
                    
                </div>
        </>
     
    );

   
}


export default Header;

