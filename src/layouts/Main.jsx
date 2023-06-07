import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import PopularClassesSection from '../components/PopularClassesSection';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <PopularClassesSection/>
            <Footer/>
        </div>
    );
}

export default Main;
