
import React from "react";
import WOW from 'wowjs';

function BodyNext () {

    // Same as component diMount
    React.useEffect(() => {
        // Runs after the first render() lifecycle
        new WOW.WOW().init()

        }, []);

    const poorKidImage = require("../../img/poverty-housing-guatemala.jpg").default;

    return (

        <>
            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5 after-about">

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

            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 m-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                           
                            <h1 className="m-5" >
                                <p className="" style={{textTransform: "uppercase"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit </p>
                                <p className="" style={{textTransform: "uppercase"}}>Cupiditate, dolore obcaecati est </p>
                            
                            </h1>
                            
                            <h5>
                                <p className=""> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Cupiditate, dolore obcaecati est aperiam exercitationem deleniti tenetur magni, 
                                commodi iusto odit qui quos pariatur ratione!
                                </p>
                                <p className="">Autem voluptas inventore earum laudantium obcaecati.</p>

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

