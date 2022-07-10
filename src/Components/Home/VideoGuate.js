
import React from "react";
import ReactPlayer from "react-player";
import WOW from 'wowjs';


function VideoGuate () {

        // Same as component diMount
        React.useEffect(() => {
            // Runs after the first render() lifecycle
            new WOW.WOW().init()
    
            }, []);

    const videoGuatemala = "https://vimeo.com/20084567"
    const playerHeight = "50rem"; // 800 px
    const playerWidth = "75rem"; // 1200 px

    return(
        <>
            <div className="row d-flex justify-content-center">

                <div className="col-sm-12 col-md-12 col-lg-12 text-center p-4 mt-5 after-about">

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

            <div className="row d-flex justify-content-center wow animate__animated animate__zoomIn animate__slower" data-wow-delay=".5s">
                <ReactPlayer
                    url={videoGuatemala}
                    playing={true}
                    loop={true}
                    muted={true}
                    width={playerWidth}
                    height={playerHeight}
                />
            </div>
        
        </>
    )

}

export default VideoGuate;