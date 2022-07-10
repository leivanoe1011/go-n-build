import React from "react";

function ComingSoon () {

    const customStyle ={
        // backgroundImage:{forestImage},
        height: "100vh",
        color:" #fff",
        backgroundImage: "url(https://images.unsplash.com/photo-1508389377389-b8221c0bcc9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        backgroundPosition: "top",
        backgroundSize: "cover",
        margin: 0
    }

    const comingSoonStyle = {
       color: "antiquewhite"

    };


    return (

        <>
        <div style={customStyle}>

            <div className="middle" >
                <h1 style={{comingSoonStyle}}>COMING SOON</h1>
                <hr
                    style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 5,
                        width: "100%"
                    }}
                />
                {/* <p>35 days</p> */}
            </div>
            <div className="bottomleft">
                <p>Some text</p>
            </div>
        </div>
        </>
    );
}

export default ComingSoon;