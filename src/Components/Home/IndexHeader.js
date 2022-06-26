
import React from "react";

function Header () {

    const poorKidImage = require("../../img/poorKidImage_25Percent.jpg").default;

    return (
        <>
                <div className="row justify-content-md-center justify-content-lg-center wow animate__animated animate__fadeInLeft animate__slower">
                
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center text-right">
                        <img src={poorKidImage}/>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center text-left">
                        <h1 className="display-4">ABOUT US</h1>
                        <div className="row">
                           <p className="lead col-sm-12 col-md-8 col-lg-8">
                            Go and Build it’s an organization committed to improve health and 
                            safety living conditions for families in extreme poverty, through the construction of sustainable homes; 
                            providing a secure and dignified place to live.
                           </p>
                        </div>
                        
                    </div>
                    
                </div>
        </>
     
    );

   
}


export default Header;

