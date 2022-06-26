
import React from "react";

function BodyNext () {

    const poorKidImage = require("../../img/poverty-housing-guatemala.jpg").default;

    return (

        <>
            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5 after-about">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1 className="after-about-body m-5" >
                                <p className="after-about-body">A LACK OF ELECTRICITY IS CREATING AN</p>
                                <p className="after-about-body">ENDLESS CYCLE OF POVERTY</p>
                            
                            </h1>
                            
                            <h5>
                                <p className="after-about-body">Nearly 
                                    1 billion people around the world are 
                                    without electricity and live in darkness. They 
                                    spend up to 30% of their <br/> income on dangerous fuel sources just to have light, and it 
                                    keeps them in a cycle of poverty .
                                </p>
                                <p className="after-about-body m-4">It leaves them powerless.</p>

                            </h5>
                          
                        </div>
                    </div>
                
                </div>

            </div>

            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1 className="m-2" >
                                <p className="">A LACK OF ELECTRICITY IS CREATING AN</p>
                                <p className="">ENDLESS CYCLE OF POVERTY</p>
                            
                            </h1>
                            
                            <h5>
                                <p className="">Nearly 
                                    1 billion people around the world are 
                                    without electricity and live in darkness. They 
                                    spend up to 30% of their <br/> income on dangerous fuel sources just to have light, and it 
                                    keeps them in a cycle of poverty .
                                </p>
                                <p className="m-4">It leaves them powerless.</p>

                            </h5>
                          
                        </div>
                    </div>
                
                </div>

            </div>


            <div className="row d-flex justify-content-center wow animate__animated animate__fadeInUp animate__slower">

                <div className="col-sm-12 col-md-10 col-lg-10 align-self-center  d-flex justify-content-center">
                    <img src={poorKidImage}/>
                </div>
                
            </div>
        </>
        
    );

   
}


export default BodyNext;

