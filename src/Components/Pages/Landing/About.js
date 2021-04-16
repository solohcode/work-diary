import React, { Component } from 'react'

import w1 from '../../../Images/banner/w3.png'


export class About extends Component {
    render() {
        return (
            <div>
                <div class="wd-landing-about">
                        <div class="wd-about-note .bg-light.bg-gradient">
                            <div class="my-5 text-center">
                                <span class="size-big">Everything you need to create</span>
                                <p> a work dashboard for all your portfolios</p>

                                    <div className="w-100 h-25 text-center mx-auto d-none d-md-block" >
                                        <div class=" animate-opacity">
                                                <img src={w1} alt="my work dashboard" width="100%" height="500px" />
                                                <span className="text-silver fst-italic"><i className="fas fa-stream"/> my work dashboard</span>
                                        </div>
                                    </div>
                                <div class="container my-3">
                                    
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="wd-about-note-head">
                                                <span class="text-primary size-big fas fa-th"/>
                                                <br/>
                                                <span style={{fontSize:'20px'}}>Work table</span>
                                                <p>Tell the world what you have been able to accomplish pertaining to your work successes </p>
                                            </div>
                                            
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="text-primary size-big fas fa-images"/>
                                            <br/>
                                                <span style={{fontSize:'20px'}}>Gallery</span>
                                                <p>Tell your story and show your work with beautiful responsive galleries</p>
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="text-primary size-big fas fa-stream"/>
                                            <br/>
                                                <span style={{fontSize:'20px'}}>Blog</span>
                                                <p>Let people follow your journey with a blog that fills with stunning images</p>
                                        </div>
                                        <div class="col-sm-3">
                                            <span class="text-primary size-big fas fa-briefcase"/>
                                            <br/>
                                                <span style={{fontSize:'20px'}}>Curriculum vitae</span>
                                                <p>your work experiences and current status all being held to the cloud for easy accessibility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div class="w-100 bg-primary text-center ">
                           <Link to="/auth/register"><button class="w-50 mx-auto my-3 btn bg-white text-primary btn-lg">Get started </button></Link>
                        </div> */}


                        
                </div>
            </div>
        )
    }
}

export default About
