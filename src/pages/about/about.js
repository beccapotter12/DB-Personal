import React from 'react';
import './about.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/AboutUsBanner.png';

const About = props => (
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

export default About;