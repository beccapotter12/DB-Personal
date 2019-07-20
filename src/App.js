import React, { useState, Components }from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Home from './pages/home/home.js';
import AvailablePuppies from './pages/availablePuppies/availablePuppies';
import GuardianHome from './pages/guardianHome/guardianHome';
import About from './pages/about/about';
import ContactUs from './pages/contactUs/contactUs';


function App() {

  const [displayContent, setDisplayContent] = useState("Home");

  const renderPage = () => {
    console.log("State-" + displayContent)
    switch (displayContent) {
      case "Home":
        return <Home />
      case "AvailablePuppies":
        return <AvailablePuppies />
      case "GuardianHome":
        return <GuardianHome />
      case "About":
        return <About />
      case "ContactUs":
        return <ContactUs />
      default:
        return <Home />
    }
  }

      return (
      
        <div className="contentSection">
          <NavBar 
      displayContent={setDisplayContent}
      />
              {renderPage()}

        </div>
      )
}

export default App;