import React from 'react';
import './contactUs.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/ContactUsBanner.png';

const ContactUs = props => (
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

export default ContactUs;