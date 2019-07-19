import React from 'react';
import './guardianHome.css';
import Navbar from '../../components/navBar/navBar';
import Banner from '../../assets/images/ui/GuardianHomeBanner.png';

import Footer from '../../components/footer/footer';

const GuardianHome = props => (
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

export default GuardianHome;