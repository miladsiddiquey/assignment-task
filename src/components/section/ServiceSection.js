import React, { useEffect, useState } from 'react';
import ServiceData from '../../AllData/ServiceData.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const ServiceSection = () => {
    const[product, setProduct] = useState([])
    useEffect(()=>{
        setProduct(ServiceData);
    },[])
    return (
        <section>
           <div className="container">
               <div className="row row-cols-md-2 row-cols-sm-2">
                   {
                       product.map((pro, index)=>{
                           return(
                               <div key={index}  className="col-6">
                                  <div className="text-center">
                                  <img  src={pro.img} alt="" className="img-fluid" />
                                  <h4>{pro.title}</h4>
                                  <p>{pro.subTitle}</p>
                                  </div>

                               </div>
                           )
                       })
                   }
               </div>
           </div>
        </section>
    );
};

export default ServiceSection;