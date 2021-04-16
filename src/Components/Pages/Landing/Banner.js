import React, { Component } from 'react'
import { Image } from 'antd'


import logo from '../../../Images/logos/black.png'

// import b1 from '../../../Images/banner/p1.jpg'
// import b2 from '../../../Images/banner/p2.jpg'
// import b3 from '../../../Images/banner/p3.jpg'
// import b4 from '../../../Images/banner/p4.jpg'
import b5 from '../../../Images/banner/p7.jpg'
import b6 from '../../../Images/banner/p8.jpg'
import b7 from '../../../Images/banner/p9.jpg'
import b8 from '../../../Images/banner/p10.jpg'
import b9 from '../../../Images/banner/p11.jpg'





export class Banner extends Component {
    render() {
        return (
            <div className="wd-landing-banner">

                        <div className="d-none d-md-block wd-banner-placard">
                            <br/>
                            <div className="mt-5">
                                <div className="w-75 mx-auto align-middle text-center mb-5">
                                    <h2 className="text-gray font-light">IT'S ALL ABOUT KNOWING WHAT YOUR BUSINESS WORTH AND GETTING RECOGNIZED FOR YOUR WORKS AND ACHIEVEMENTS. </h2>
                                    <span className=" mt-3 text-light">scaling the part of business success </span>
                                </div>
                                <div className="w-75 mx-auto mt-5 text-center text-light px-5">
                                    <quote>
                                        <span class="fas fa-quote-left"/>
                                        <i style={{fontSize:20}}> Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort. </i>
                                        <span class="fas fa-quote-right"/>
                                            <br/>
                                        <span className="text-gray">~ Franklin D. Roosevelt {':)'}</span>
                                    </quote>
                                </div>
                            </div>
                            
                        </div>

                <div className="">

                    <div className=" wd-banner-setup  container-fluid">
                        <br/>
                                <div className="text-center mt-4">
                                    <span className="size-big">Work Diary</span>
                                    <br/>
                                    <span className="text-gray">what more is it about?</span>
                                </div>
                        <div className=" mx-auto border-bottom wd-main-banner row">
                            <div className="col-md-5 animate-left mb-5">
                                <div className="d-none d-md-block text-center">
                                    <img src={logo} alt="..." width="200px" height="100px" />
                                </div>
                                <div className="text-center px-md-4 ">
                                    <span className=" text-gray">
                                        Open source portfolio work diary for business owners, Entrepreneurs and
                                            employee over the globe 
                                    </span>
                                    <h5 className="text-gray"> for all open use only, no duplication! safe diary store.</h5>
                                    <h6 className="text-gray">store work achievements, store everything {':)'}</h6>
                                </div>
                            </div>
                            <div class="col-md-7 animate-right">
                               
                            </div>  
                        </div>


                        <div class="row text-center bg-light">
                            <div className="text-center my-4">
                                <span className="fs-4">Looking For Portfolio Ideas <br/> and Designs For your Next Project</span>
                                <br/>
                                <span className="fs-6 text-gray">Portfolio Examples <i className="fa fa-gift"/></span>
                            </div>
                            <div class="col-sm-4 text-center shadow-sm">
                                <Image
                                    width="100%"
                                    height="85%"
                                    src={b5}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                    }
                                />
                                <a 
                                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjp9vyPz-nvAhWFwuYKHVXAA0AQFjAKegQIExAD&url=https%3A%2F%2Fwww.journoportfolio.com%2Fexamples%2Fbloggers%2F&usg=AOvVaw3SevXv59-B9wC4aGeJgawV"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 >
                                     create the best portfolio blog for yourself. <span class="fa fa-arrow-right"/>
                                     </a>
                            </div>
                            <div class="col-sm-4">
                                <Image
                                    width="100%"
                                    height="85%"
                                    src={b6}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                    }
                                />
                                <a 
                                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.designhill.com%2Fdesign-blog%2Fgreat-examples-of-graphic-design-portfolios%2F&psig=AOvVaw238faTfsf2lXFNbybplRII&ust=1617788530598000&source=images&cd=vfe&ved=2ahUKEwj6huOGqunvAhWM_4UKHQ0aDVQQr4kDegUIARDPAQ"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 >
                                     portfolio designs you'll love. <span class="fa fa-arrow-right"/>
                                     </a>
                            </div>
                            <div class="col-sm-4 shadow-sm">
                                <Image
                                    width="100%"
                                    height="85%"
                                    src={b7}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                    }
                                />
                                <a
                                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F580823683171770095%2F&psig=AOvVaw238faTfsf2lXFNbybplRII&ust=1617788530598000&source=images&cd=vfe&ved=2ahUKEwj6huOGqunvAhWM_4UKHQ0aDVQQr4kDegUIARDRAQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    get your hiring manager blown away. <span class="fa fa-arrow-right"/>
                                </a>
                            </div>
                            <br/><br/>
                            <div class="col-sm-3 shadow-sm">
                                <Image
                                    width="100%"
                                    // height="95%"
                                    src={b8}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                    }
                                />
                            </div>
                            <div class="col-sm-4 shadow-sm">
                                <Image
                                    width="100%"
                                    // height="95%"
                                    src={b9}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                        <br/>
                </div>
            </div>
        )
    }
}

export default Banner
