import React from 'react'
import { Router,Switch,Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Layout } from 'antd'


// css file and extension imports 
import 'antd/dist/antd.css'
import './Styles/motion.css'
import './Styles/Pages/pages.css'
import './Styles/Components/components.css'




// // components imports
import Navbar from './Components/Partial/Header/Navbar'


//  pages imports
import LandingPage from './Pages/Landing/LandingPage'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Verify from './Pages/Auth/Verify'
import Forgot from './Pages/Auth/Forgot'



// assign browser history and export for general use
export const history = createBrowserHistory()

const { Content } = Layout

 const App = ()=>{
return (
        <div className="">
            <Layout>
                <Content className="site-layout">

                    <Router history={history}>

                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            {/* <Route exact path="/" component={LandingPage}/> */}

                            {/* authentication pages with prefix "/auth"  */}
                            <Route path="/auth/login" component={Login} />
                            <Route path="/auth/register" component={Register} />
                            <Route path="/auth/verify" component={Verify} />
                            <Route path="/auth/forgot" component={Forgot} />

                            {/* users experience pages with the prefix "/user"  */}

                        </Switch>

                    </Router>

                    
                </Content>
            </Layout>
        </div>
    )
}

export default App
