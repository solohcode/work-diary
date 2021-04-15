import React, { Component } from 'react'
import {Button} from 'antd'
import { UserOutlined} from '@ant-design/icons';


// images imports 
import w1 from '../../../Images/banner/w3.png'
import w2 from '../../../Images/banner/w1.png'
import w3 from '../../../Images/banner/w2.png'
import w4 from '../../../Images/banner/w4.png'
import w5 from '../../../Images/banner/w5.png'
import logo from '../../../Images/logos/icon01.png'
import side from '../../../Images/banner/w6.png'



export class Top extends Component {
    render() {
        return (
            <div>
                <div className="wd-top bg-white">
                    <br/>
                    <div class="shadow-sm container-fluid mt-4" style={{height:'100%'}}>
                        <div class="row">
                            <div class="col-md-6 text-center border-bottom ">
                                <div class="mt-big ">
                                    <br/>
                                    <img src={logo} class="mt-5 animate-top" alt="icon.." width="50px" height="50px" />
                                    <br/>
                                    <div class="animate-right">
                                    <span class="mt-3 size-big font-light">BUILD YOU OWN</span>
                                    <h6 class="px-5 w-75 mx-auto text-center size-big text-silver font-normal">ONLINE PORTFOLIO REVIEW DASHBOARD.</h6>
                                    <span class="text-gray font-normal">EASY TO USE TECHNOLOGY {':)'}</span>
                                    </div>
                                </div>
                                <div class="my-5 animate-left">
                                        <Button type="primary" size="large" className="w-50">
                                            GET STARTED
                                        </Button>
                                </div>
                                <br/>
                                <div class="animate-bottom">
                                    <div class="mt-5 mb-3">
                                            <Button type="ghost" size="large" className="text-gray" icon={<UserOutlined/>}>
                                                LOGIN
                                            </Button>
                                    </div>
                                    <div class="my-2 mb-5">
                                        <span class="text-gray font-normal">USED BY CREATIVE MINDS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="wd-top-side d-none d-md-block col-md-6 border-bottom " >
                                <div class="w-100 h-75">
                                </div>
                                <div className="h-25 top-100 bottom-0 bg-dark w-100 animate-opacity text-center">
                                        <img src={side} alt="let your portfolio dashboard get you your preferred job" className="mx-auto" width="200px" height="100px" style={{marginTop:'-100px'}}/>
                                        <div className="w-75 text-center text-gray fst-italic mx-auto mt-2">
                                            <span>Work Diary is an online portfolio reviewer designed to hold any job seeker or worker of any organization or a business entrepreneur his or her work done, their portfolios to be precise, for review purpose. 
                                                <br/>
                                                more details at the bottom <i className="fas fa-angle-double-down"/>
                                                 </span>
                                                
                                            <div className="mt-3">
                                                <span className="text-light">Own a portfolio dashboard today <i className="fas fa-smile"/></span>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="w-75 text-center mx-auto d-none d-md-block col-md-6" >
                                 <div class=" animate-opacity">
                                        <img src={w1} alt="my work dashboard" width="100%" height="100%" />
                                        <span className="text-silver fst-italic"><i className="fas fa-stream"/> my work dashboard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                            <div className="text-center mt-5" >
                                <span className=" size-big text-silver">Work Lifecycle <span className="text-primary fas fa-briefcase"/></span>
                                <div className="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src={w2} alt="let your portfolio dashboard get you your preferred job" width="100%" />
                                        </div>
                                        <div class="col-md-3">
                                            <img src={w3} alt="let your portfolio dashboard get you your preferred job" width="100%" />
                                        </div>
                                        <div class="col-md-3">
                                            <img src={w4} alt="let your portfolio dashboard get you your preferred job" width="100%" />
                                        </div>
                                        <div class="col-md-3">
                                            <img src={w5} alt="let your portfolio dashboard get you your preferred job" width="100%" />
                                        </div>
                                    </div>

                                    <div class="w-100 animate-right bg-gradient-blue h-25 wd-top-side-bottom text-center px-5 text-white">
                                        <br/>
                                        <quote class="">Upload your works and let your dashboard get you your preferred job, <br/> let your work speak for you.</quote>
                                        <div>
                                            <quote>
                                                <span class="fas fa-quote-left"/>
                                                <i style={{fontSize:20}}> Doing the best at this moment puts you in the best place for the next moment. </i>
                                                <span class="fas fa-quote-right"/>
                                                    <br/>
                                                <span>~ Oprah Winfrey</span>
                                            </quote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        )
    }
}

export default Top
