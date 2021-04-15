import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';


import { Layout, Button } from 'antd';

import logo from "../../../Images/logos/icon01.png"


export class Navbar extends Component {
  render() {
    return (
      <div className="wd-navbar">
        
        <Layout>
    
        <nav class="navbar shadow fixed-top navbar-expand-lg navbar-light bg-white ">
                  <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">
                      <img src={logo} alt="..." width="35px" height="30px" />
                      <span> Work Diary</span>
                    </Link>
                    <span class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </span>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                      </ul>
                      <div class="d-flex">
                        <Link to="/auth/login">
                          <Button type="ghost" className="mx-2 btn btn-outline-primary" icon={<UserOutlined/>}>
                              LOGIN
                          </Button>
                        </Link>
                        <Link to="/auth/register">
                          <Button type="primary"  style={{width:'180px'}} icon={<UserAddOutlined />}>
                              Create an account
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
    
        </Layout>




      
  
      </div>
    )
  }
}

export default Navbar
