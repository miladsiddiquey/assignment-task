import React from 'react';
import Style from '../../style/ContactSection.module.css';
import IntPoster from '../../assets/images/video-poster.jpg';
import IntVideo from '../../assets/videos/interview-white.mp4';

const ContactSection = () => {

    const location = [
        {
            "title":"San Francisco",
            "icon":<svg className="JoinUs--joinUs__headingIcon--1mXV7" width="14" height="18" role="img"><path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path></svg>
        },
        {
            "title":"New York",
            "icon":<svg className="JoinUs--joinUs__headingIcon--1mXV7" width="14" height="18" role="img"><path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path></svg>
        },
        {
            "title":"Reykjavík",
            "icon":<svg className="JoinUs--joinUs__headingIcon--1mXV7" width="14" height="18" role="img"><path d="M7,0.2c-3.9,0-7,3.1-7,7c0,5.2,6.5,10.2,6.8,10.4c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1C7.5,17.5,14,12.4,14,7.2C14,3.4,10.9,0.2,7,0.2z M7,10.2c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.6,10.2,7,10.2z"></path></svg>
        },
       
    ]

    return (
        <section>
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                   <div className={Style.InterviewVideo}>
                   <video  playsInline loop autoPlay muted={true} poster={IntPoster} src={IntVideo}  type="video/mp4"></video>                 
                  
                   </div>
                   </div>
               </div>

            <div>
            <h2>Join us <br/>Open positions</h2>
                <div className="row row-cols-md-3 row-cols-sm-2 mt-5">
                {
                location.map((loc, index)=>{
                    return(
                        <div key={index} className=" col-6 d-flex justify-content-center">
                            <div>
                            <div className="d-flex">
                            <h5>{loc.title}</h5>
                            <span className={Style.smLine}></span>
                            <a href="#">{loc.icon}</a>
                            </div>
                            <p>No open positions</p>
                            </div>
                            
                        </div>
                    )
                })
            }
                </div>
            </div>
            
           </div>
        </section>
    );
};

export default ContactSection;