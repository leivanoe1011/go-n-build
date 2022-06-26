
// Dependencies
import React from 'react';


// Components
import NavBar from "./Components/Services/NavBar";
import MainBody from "./Components/Services/MainBody";
import Footer from "./Components/Services/Footer";
import Routes from "./Components/Services/Routes";


// Services
import history from './Services/History';

// css
import "./styles/app.css";



function App() {
  return (

    <>
     
      {/* The Link components in the NavBar must live within the Router component */}
    
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

      {/* Footer */}
      <footer className="container-fluid">
          <Footer/>
      </footer>
      {/* End of Container */}
      

 
    </>

    );
}


export default App;
