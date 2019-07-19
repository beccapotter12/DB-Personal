import React from 'react';
import './guardianHome.css';
import Navbar from '../../components/navBar/navBar';
import Banner from '../../assets/images/ui/GuardianHomeBanner.png';
import Percy from '../../assets/images/ui/Percy.jpeg';
import Fleur from '../../assets/images/ui/Fleur.jpeg';
import Serius from '../../assets/images/ui/Sirus.JPG';
import Albus from '../../assets/images/ui/AlbusPuppy.jpg';


import Footer from '../../components/footer/footer';

const GuardianHome = props => (
    <div>
        <div>
            <Navbar />
        </div>

        <div>
            <img className="banner" src={Banner} alt="banner"/>
        </div>

        <div className="row">

            <div className="col-sm"> 
            <img className="guardianImage" src={Percy} alt="percy"/>
            <img className="guardianImage" src={Fleur} alt="fleur"/>
            <img className="guardianImage" src={Serius} alt="serius"/>
            <img className="guardianImage" src={Albus} alt="albus"/>



            </div>

            <div className="col-sm">
        <div className="guardianHeader">What is a Guardian Home?</div>
        <div className="guardianBody">
            <p>Guardian home applications are being accepted for this opportunity. A guardian home provides a permanent stable home to dogs that are part of our breeding program.</p>

            <p>Here at Doodle Belle Kennels we retain ownership of the animal and cover all the costs of breeding including genetic and health screenings, whelping and spay when her breeding career is finished usually around 5 years old after 3 to 4 litters of puppies.</p>

            <p>She lives with you until about a week before puppies are due and then comes to us for 8 weeks to raise her litter.</p>

            <p>We do require that you have a fenced yard, live within an hour of Layton, UT and you cover the costs of regular care, grooming, a high quality approved diet, maintenance and training.</p>
            </div>
            </div>

            <div className="col-sm"> 
            <img className="guardianImage" src={Percy} alt="percy"/>
            <img className="guardianImage" src={Fleur} alt="fleur"/>
            <img className="guardianImage" src={Serius} alt="serius"/>
            <img className="guardianImage" src={Albus} alt="albus"/>


            </div>
            </div>
        <div>
            <Footer />
        </div>
        
    </div>

);

export default GuardianHome;