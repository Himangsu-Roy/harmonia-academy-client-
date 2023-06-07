import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import PopularClassesSection from '../components/PopularClassesSection';
import PopularInstructorsSection from '../components/PopularInstructorsSection';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <PopularClassesSection/>
            <PopularInstructorsSection/>
            <Footer/>
        </div>
    );
}

export default Main;
