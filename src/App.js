import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Home from './pages/home/home.js';
import AvailablePuppies from './pages/availablePuppies/availablePuppies';
import GuardianHome from './pages/guardianHome/guardianHome';
import About from './pages/about/about';
import ContactUs from './pages/contactUs/contactUs';

function App() {

      return (
      
        <div className="contentSection">
          <ContactUs />
        </div>
      )
}

export default App;