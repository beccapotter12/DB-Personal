import React from 'react';
import './availablePuppies.css';
import Navbar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Banner from '../../assets/images/ui/AvailablePuppiesBanner.png';
import Percy from '../../assets/images/ui/Percy.jpeg';
import Fleur from '../../assets/images/ui/Fleur.jpeg';
import Serius from '../../assets/images/ui/Sirus.JPG';
import Albus from '../../assets/images/ui/AlbusPuppy.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const AvailablePuppies = props => (
    <div>
   
        <div>
            <img className="banner" src={Banner} alt="banner"/>
        </div>
        <div className="availableHeader">Available Puppies!</div>
        <div className="availableBody">The Puppies below are ready to go to a new home!</div>
        <div className="availablePuppy">
        <div className="row">
             <div className="col-xs">
                <img className="image" src={Percy} alt="percy" rounded />
                <p className="availableBody"> Percy $1800 </p>
            </div>
            <div className="col-xs">
                <img className="image" src={Fleur} alt="fleur" rounded />
                <p className="availableBody"> Fleur $1800 </p>

            </div>
            <div className="col-xs">
                <img className="image" src={Albus} alt="albus" rounded />
                <p className="availableBody"> Albus $1800 </p>

            </div>
            <div className="col-xs">
                <img className="image" src={Serius} alt="serius" rounded />
                <p className="availableBody"> Serius $1800 </p>

            </div>
        </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>

);

export default AvailablePuppies;