import React from 'react';
import './about.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/AboutUsBanner.png';
import Percy from '../../assets/images/ui/Percy.jpeg';
import Fleur from '../../assets/images/ui/Fleur.jpeg';
import Serius from '../../assets/images/ui/Sirus.JPG';
import Albus from '../../assets/images/ui/AlbusPuppy.jpg';

const About = props => (
    <div>
    
    <div>
        <img className="banner" src={Banner} alt="banner"/>
    </div>
    <div className="row">

            <div className="col-sm"> 
            <img className="aboutImage" src={Percy} alt="percy"/>
            <img className="aboutImage" src={Fleur} alt="fleur"/>
            <img className="aboutImage" src={Serius} alt="serius"/>

            </div>

            <div className="col-sm">
        <div className="aboutHeader">About Us!</div>
        <div className="aboutBody">
            
        <p>We’ve done the research for you and distilled down a hundred years of combined experience into easy to follow protocols. You’ll receive week-by-week and step-by-step instructions, proven by science and experience to ensure the best outcomes for your puppies.</p>

        <p>Nothing is more frustrating than sending a perfect puppy to a new home only to get a phone call months later that the puppy is acting out or having problems. We give you checklists and key points to share with your puppy buyers which will prepare them to follow through with the Puppy Culture program after you send their puppy home with them.</p>
            </div>
            </div>

            <div className="col-sm"> 
            <img className="aboutImage" src={Albus} alt="albus"/>
            <img className="aboutImage" src={Serius} alt="serius"/>
            <img className="aboutImage" src={Fleur} alt="fleur"/>

            </div>
            </div>
    <div>
        <Footer />
    </div>
</div>

);

export default About;