
// Dependencies
import React from 'react';
import { Router } from 'react-router-dom';


// Components
import NavBar from "./Components/NavBar";
import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";


// Services
import history from './Services/History';

// css
import "./styles/app.css";



function App() {
  return (

    <>
     
      {/* The Link components in the NavBar must live within the Router component */}
      <Router history={history}>
    
        {/* <Router> */}
               {/* Start of NavBar */}
               <div className="navContainer">

                  <div className="container">
                    <NavBar className="row" />
                  </div>

                </div>     
                {/* End of NavBar */}
            
              <MainBody>
                  <Routes history={history} />
              </MainBody>

          {/* </Router> */}

      </Router>
     
      {/* Footer */}
      <footer className="footer">
        <Footer/>
      </footer>
      {/* End of Container */}
      

 
    </>

    );
}


export default App;
