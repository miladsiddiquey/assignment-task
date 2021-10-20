import React from 'react';
import Style from '../../style/Home.module.css';
import BlogSection from '../section/BlogSection';
import ContactSection from '../section/ContactSection';
import Footer from '../section/Footer';
import HeroSection from '../section/HeroSection';
import Navbar from '../section/Navbar';
import ServiceInfo from '../section/ServiceInfo';
import ServiceSection from '../section/ServiceSection';

const Home = () => {
    return (
        <div>
          <div className={Style.homeBg}> </div>
          <Navbar/>
           <HeroSection/>
         
           <ServiceInfo/>
           <ServiceSection/>
           <BlogSection/>
           <ContactSection/>
           <Footer/>
        </div>
    );
};

export default Home;