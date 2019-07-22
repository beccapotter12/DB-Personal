import React from 'react';
import './home.css';
import Banner from '../../assets/images/ui/BannerImage3.png';
import HomeCarousel from '../../components/carousel/carousel';
import MissionStatement from '../../components/missionStment/missionStment';
import Footer from '../../components/footer/footer';
import DogPeople from '../../components/dogPeople/dogPeople';
import DogFront from '../../assets/images/ui/FrontPage.png';


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
            <img className="imagesHome" src={DogFront} alt="doggy"/>
            </div>
            <div className="col-sm">
                <DogPeople />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>

);

export default Home; 

  