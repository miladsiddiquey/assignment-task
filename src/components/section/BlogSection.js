import React from 'react';
import Style from '../../style/BlogSection.module.css';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const blog =[
        {
            "id":1,
            "date":"Jan 06 Blog",
            "title":"24,897 hours later"
        },
        {
            "id":2,
            "date":"Oct 19 News",
            "title":"Figma wanted our CEO's insights for some reason"
        },
        {
            "id":3,
            "date":"Oct 12 News",
            "title":"This guy really won't shutup"
        }
    ]
    return (
        <section className={Style.BlogNews}>
            <div className="container">
                <div className="row d-flex align-items-baseline">
                    <div className="col-md-4">
                        <h2 className={Style.h2}>What’s new? <br/>Our blog and news</h2>
                    </div>
                    <div className="col-md-8">
                        
                            {
                                blog.map((blog, index)=>{
                                    return(
                                      <>
                                      <div key={index} className="row mt-5 ">
                                          <div className="col-md-12">
                                             <div className="d-flex justify-content-between align-items-center">
                                             <p className="text-muted">{blog.date}</p>
                                              <h3 className="ms-5 "style={{maxWidth:'400px'}}>{blog.title}</h3>
                                              <Link href="#">Read more</Link>
                                             </div>
                                             </div>
                                      </div>
                                      <hr/>
                                      </>
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;