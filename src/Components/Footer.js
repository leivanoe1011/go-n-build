
import React from "react";

function Footer(){
    
    const currentYear = new Date().getFullYear();

    const mystyle = {
        listStyleType: "none",
        padding: "10px",
        fontFamily: "Arial"
      };
      
    return (
        <>
            <div className="row align-self-center d-flex justify-content-center bg-secondary p-5">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h3 className="text-white">Stuff</h3>
                    <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, dolore obcaecati est aperiam exercitationem deleniti tenetur magni, commodi iusto odit qui quos pariatur ratione! Autem voluptas inventore earum laudantium obcaecati.</p>
                    <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, dolore obcaecati est aperiam exercitationem deleniti tenetur magni, commodi iusto odit qui quos pariatur ratione! Autem voluptas inventore earum laudantium obcaecati.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 className="text-white ">Connect</h5>
                    <ul className="connect-links" style={mystyle}>
                        <li><a href="#" className="text-white">Facebook</a></li>
                        <li><a href="#" className="text-white">Instragram</a></li>
                        <li><a href="#" className="text-white">Pinterest</a></li>
                    </ul>
                </div>
            </div>

            <div className="row align-self-center d-flex justify-content-center bg-dark p-5">
                <div className="col-sm-12 col-md-10 col-lg-10 align-self-center d-flex justify-content-center">
                    <div class="center-align text-white ">&copy; {currentYear} GO-AND-BUILD</div>

                </div>
               
            </div>
        </>
    )
}

export default Footer;

