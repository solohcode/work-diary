import React, { Component } from 'react'

// components imports 
import Top from '../../Components/Pages/Landing/Top'
import Banner from '../../Components/Pages/Landing/Banner'
import About from '../../Components/Pages/Landing/About'
import Scroll from '../../Components/Pages/Landing/Scroll'
import Tell from '../../Components/Pages/Landing/Tell'



export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Top/>
                <About/>
                <Tell/>
                <div className="wd-landing-page">
                    <Banner/>    
                </div>
                    <hr/>
                    <Scroll/>
            </div>
        )
    }
}

export default LandingPage
