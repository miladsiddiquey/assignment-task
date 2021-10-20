import React from 'react';
import Style from '../../style/ServiceInfo.module.css';

const ServiceInfo = () => {
    return (
        <section>
            <div className="container"style={{maxWidth:'500px'}}>
                <div className="row">
                   <div>
                   <div className="text-center" >
                        <h3>Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</h3>
                        
                    </div>
                    
                    <div className={`${Style.info} text-end`}>
                    <h6 className="text-end fw-bold mt-5 "><a href="#">contact</a></h6>
                    <h3 style={{marginTop:'200px',marginBottom:'30px'}}> All work, all play<br/>Selected projects</h3>
                    <div className={Style.line}></div>
                    </div>
                   </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;