import React from 'react';
import profileImage from './img/MeProfile.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Noe Leiva</h2>
      <img src={profileImage} alt="profile-img"/>
    </div>
  );
}

export default App;
