import React from 'react';
import './contactUs.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/ContactUsBanner.png';
import Percy from '../../assets/images/ui/Percy.jpeg';
import Fleur from '../../assets/images/ui/Fleur.jpeg';
import Serius from '../../assets/images/ui/Sirus.JPG';
import Albus from '../../assets/images/ui/AlbusPuppy.jpg';

const ContactUs = props => (
    <div>
   
    <div>
        <img className="banner" src={Banner} alt="banner"/>
    </div>
    <div className="row">

            <div className="col-sm"> 
            <img className="guardianImage" src={Percy} alt="percy"/>
            <img className="guardianImage" src={Fleur} alt="fleur"/>

            </div>

            <div className="col-sm">
        <div className="guardianHeader">Contact Us!</div>
        <div className="guardianBody">
            
            <p>Call or Text at: </p>
            <p>Laura Hallen - (801) 498-0358</p>
            <p>Eric Hallen - (801) 390-0415 </p>
            <p>Follow us at: </p>
            <p>Facebook @ doodle_belle_puppy</p>
            <p>Instagram @ doolebellepuppy</p>
            <p>Email @ doodlebellepuppy@gmail.com </p>
            </div>
            </div>

            <div className="col-sm"> 
            <img className="guardianImage" src={Albus} alt="albus"/>
            <img className="guardianImage" src={Serius} alt="serius"/>


            </div>
            </div>
    <div>
        <Footer />
    </div>
</div>

);

export default ContactUs;