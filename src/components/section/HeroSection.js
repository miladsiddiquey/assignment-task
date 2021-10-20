import React from 'react';
import Style from '../../style/HeroSection.module.css';
import VideoPoster from '../../assets/images/video-poster.jpg';
import HeroVideo from '../../assets/videos/reuters_phone.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const HeroSection = () => {
    return (
        <>
          <div className="container">
              <div className="row align-items-center mt-5">
                  <div className="col-md-6">
                   <div data-aos="fade-up"  data-aos-duration="2000" className="info">
                   <p>Featured project</p>
                    <h1 className="titleOne">Reuters News App News on the move</h1>
                    <a href="#"><p className="mt-5">More project</p></a>
                   </div>
                    
                  </div>
                  <div className="col-md-6">
                 <div data-aos="fade-left"  data-aos-duration="2000" className={Style.videoCol}>
                 <video  playsInline loop autoPlay muted={true} poster={VideoPoster} src={HeroVideo}  type="video/mp4"></video>
                 </div>
                  </div>
              </div>
              </div>  
        </>
    );
};

export default HeroSection;