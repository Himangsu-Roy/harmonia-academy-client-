import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import PopularClassesSection from '../components/PopularClassesSection';
import PopularInstructorsSection from '../components/PopularInstructorsSection';
import MusicProgramsSection from '../components/MusicProgramsSection';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <PopularClassesSection/>
            <PopularInstructorsSection/>
            <MusicProgramsSection/>
            <Footer/>
        </div>
    );
}

export default Main;
