import React from 'react';
import Style from '../../style/Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    const footerData = [
        {
            "menu1":<Link to="#">Clients</Link>,
            "menu2":<Link to="#">About</Link>,
            "menu3":<Link to="#">News</Link>,
            "menu4":<Link to="#">Contact</Link>,
            "menu5":<Link to="#">Careers</Link>,
            "menu6":<Link to="#">Press</Link>,
           
        },
        {
            "menu7":<Link to="#">San Francisco</Link>,
            "menu8":<Link to="#">New York </Link>,
            "menu9":<Link to="#">News</Link>,
            "menu10":<Link to="#">Los Angeles</Link>,
            "menu11":<Link to="#">Reykjavik</Link>
            
           
        },
        {
            "menu12":<Link to="#">Newslatter</Link>,
            "menu13":<Link to="#">Blog</Link>,
            "menu14":<Link to="#">Bueno.co</Link>,
            "menu15":<Link to="#">Ueno.design</Link>,
            "menu16":<Link to="#">Ueno.store</Link>,
            "menu17":<Link to="#">Ueno.events</Link>,
            "menu18":<Link to="#">Ueno.land</Link>,
            "menu19":<Link to="#">Playground</Link>,
            "menu20":<Link to="#">The Interview</Link>
           
        },
    ]
    return (
        <section>
            <div className="container">
                <hr/>
                <div className="row d-flex align-items-baseline "style={{margin:'130px 0px'}}>
                    <div className="col-md-6">
                        <h2>Got a project? <br/>Let’s talk</h2>
                        <Link to="#" ><p className="mt-4">Tell us evrything</p></Link>
                    </div>
                    <div className="col-md-6">
                       <div className="row row-cols-md-3 row-cols-sm-3 d-flex align-items-baseline">
                       {
                            footerData.map((footer, index)=>{
                               return(
                                <div key={index} className="col-4">
                                <p>{footer.menu1}</p>
                                <p>{footer.menu2}</p>
                                <p>{footer.menu3}</p>
                                <p>{footer.menu4}</p>
                                <p>{footer.menu5}</p>
                                <p>{footer.menu6}</p>
                                <p>{footer.menu7}</p>
                                <p>{footer.menu8}</p>
                                <p>{footer.menu9}</p>
                                <p>{footer.menu10}</p>
                                <p>{footer.menu11}</p>
                                <p>{footer.menu12}</p>
                                <p>{footer.menu13}</p>
                                <p>{footer.menu14}</p>
                                <p>{footer.menu15}</p>
                                <p>{footer.menu16}</p>
                                <p>{footer.menu17}</p>
                                <p>{footer.menu18}</p>
                                <p>{footer.menu19}</p>
                                <p>{footer.menu20}</p>
                            </div>
                               )
                            })
                        }
                       </div>
                    </div>
                </div>
                <hr/>
                {/* footer bottom */}
                <div className="row d-flex align-items-baseline">
                <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link to="#" className="navbar-brand fs-2  " >ueno.</Link>
                   
                    <div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="#" className="nav-link active fs-6 fw-bold me-3" aria-current="page" >SERVICE </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link  fs-6 fw-bold me-3" aria-current="page" >CLIENTS </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link  fs-6 fw-bold me-3" aria-current="page" >CAREERS </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link  fs-6 fw-bold me-3" aria-current="page" >ABOUT </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
                </div>
            </div>

        </section>
    );
};

export default Footer;