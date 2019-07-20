import React from 'react';
import './home.css';
import Navbar from '../../components/navBar/navBar';
import Banner from '../../assets/images/ui/BannerImage3.png';
import HomeCarousel from '../../components/carousel/carousel';
import MissionStatement from '../../components/missionStment/missionStment';
import Footer from '../../components/footer/footer';

const Home = props => (
    <div>
        
        <div>
            <img className="banner" src={Banner} alt="banner"/>
        </div>
        <div className="row homeTopContent">
            <div className="col-sm">
                <MissionStatement />
            </div>
            <div className="col-sm">
                <HomeCarousel />
            </div>
        </div>
        <div className="row homeTopContent">
            <div className="col-sm">
                <HomeCarousel />
            </div>
            <div className="col-sm">
                <MissionStatement />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>

);

export default Home; 

  