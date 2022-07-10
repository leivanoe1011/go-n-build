
import React from "react";

function IndexBody () {

    const poorKidImage = require("../../img/My project.jpg").default;

    return (

        <>
            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 mb-5 after-about">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1 className="after-about-body m-5" >
                                <p className="after-about-body" style={{textTransform: "uppercase"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
                                <p className="after-about-body" style={{textTransform: "uppercase"}}>Cupiditate, dolore obcaecati est </p>
                            
                            </h1>
                            
                            <h5>
                                <p className="after-about-body"> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Cupiditate, dolore obcaecati est aperiam exercitationem deleniti tenetur magni, 
                                commodi iusto odit qui quos pariatur ratione!
                                </p>
                                <p className="after-about-body m-4">Autem voluptas inventore earum laudantium obcaecati.</p>

                            </h5>
                          
                        </div>
                    </div>
                
                </div>

            </div>

            <div className="row d-flex justify-content-center wow animate__animated animate__fadeInUp animate__slower">

                <div className="col-sm-12 col-md-10 col-lg-10 align-self-center d-flex justify-content-center">
                    <img src={poorKidImage}/>
                </div>
                
            </div>
        </>
        
    );

   
}


export default IndexBody;

