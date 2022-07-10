import React from "react";
import WOW from 'wowjs';

function ComingSoon () {


    // Same as component diMount
    React.useEffect(() => {
        // Runs after the first render() lifecycle
        new WOW.WOW().init()

        }, []);


    const customStyle ={
        // backgroundImage:{forestImage},
        height: "100vh",
        color:" #fff",
        backgroundImage: "url(https://images.unsplash.com/photo-1508389377389-b8221c0bcc9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        backgroundPosition: "top",
        backgroundSize: "cover",
        margin: 0
    }

    const comingSoonStyle = { color: "white",backgroundColor:"#B2BEB5" };


    return (

        <>
        <div className="row justify-content-md-center justify-content-lg-center" style={customStyle}>

            <div className="col-sm-3 col-md-3 col-lg-3 align-self-center text-center wow animate__animated animate__fadeInLeft animate__slower" >
                <h1 style={comingSoonStyle}>COMING SOON
                    
                    <hr
                        style={{
                            color: "white",
                            backgroundColor: "white",
                            height: 5,
                        }}
                    />
                    
                </h1>
            </div>
            
            <div className="bottomleft">
            </div>
        </div>
        </>
    );
}

export default ComingSoon;