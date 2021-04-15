import React, { Component } from 'react'
import {Button, Popover} from 'antd'
import { UserOutlined} from '@ant-design/icons';


// images imports 
import w1 from '../../../Images/banner/w3.png'
import w2 from '../../../Images/banner/w1.png'
import w3 from '../../../Images/banner/w2.png'
import w4 from '../../../Images/banner/w4.png'
import w5 from '../../../Images/banner/w5.png'
import w6 from '../../../Images/banner/w7.png'
import w7 from '../../../Images/banner/w8.png'
import w8 from '../../../Images/banner/w9.png'
import logo from '../../../Images/logos/icon01.png'
import side from '../../../Images/banner/w6.png'



export class Top extends Component {
    render() {
        const content =[
            (
            <div>
              <span>Create a work diary account <br/> to get experienced what it is all about. </span>
            </div>
             ),
             (
            <div>
                <span>Set up your work diary dashboard <br/> with any layout of your choice. </span>
            </div>
             ),
             (
            <div>
                <span>Upload your work or business datas, <br/> information and portfolios. </span>
            </div>
            ),
            (
            <div>
                <span>Sit back and watch your dashboard <br/> bring you your desired job and clients. </span>
            </div>
            ),

        ];

        return (
            <div>
                <div className="wd-top bg-white">
                    <br/>
                    <div class="shadow-sm container-fluid mt-4" style={{height:'100%'}}>
                        <div class="row">
                            <div class="col-md-5 text-center border-bottom ">
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

                            <div className="wd-top-side d-none d-md-block col-md-7 border-bottom " >
                                <div class="w-100 h-75">
                                    <br/>
                                    <div className="text-center mt-5 size-big p-5">
                                        <span className="fw-light text-gray">FEW STEPS TO </span>
                                        <br/>
                                        <span className="text-light fst-italic ">GETTING YOUR WORK OR YOUR BUSINESS RECOGNIZED</span>
                                    </div>
                                </div>
                                <div className="h-25 top-100 bottom-0 bg-dark w-100 animate-opacity text-center">
                                    <br/>
                                    <div className="container-fluid">
                                        <div style={{marginTop:'-100px'}} className="row">
                                            <div className="col-3">
                                                <Popover content={content[0]} title="Create An Account">
                                                    <img src={side} alt="..." width="100%" height="100px"/>
                                                </Popover>
                                            </div>
                                            <div className="col-3">
                                                <Popover content={content[1]} title="Set Up Dashboard">
                                                    <img src={w8} alt="..." width="100%" height="100px"/>
                                                </Popover>
                                            </div>
                                            <div className="col-3">
                                                <Popover content={content[2]} title="Upload Portfolios">
                                                    <img src={w6} alt="..." width="100%" height="100px"/>
                                                </Popover>
                                            </div>
                                            <div className="col-3">
                                                <Popover content={content[3]} title="Get Hired">
                                                    <img src={w7} alt="..." width="100%" height="100px"/>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
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

                            <div className="w-75 text-center mx-auto d-none d-md-block" >
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
