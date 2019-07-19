import React from 'react';
import './availablePuppies.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/AvailablePuppiesBanner.png';

const AvailablePuppies = props => (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <img className="banner" src={Banner} alt="banner"/>
        </div>
        <div>
            <Footer />
        </div>
    </div>

);

export default AvailablePuppies;