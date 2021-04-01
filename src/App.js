import React from 'react'
import { Router,Switch,Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// assign browser history and export for general use
export const history = createBrowserHistory()



// // components imports


// // pages imports





 const App = ()=>{
return (
        <div className="">

            <Router history={history}>
                <Switch>
                    {/* <Route exact path="/" component={}/> */}
                </Switch>
            </Router>
            <h1 className=" mt-5 text-center">hello world from work diary {':)'}</h1>
        </div>
    )
}

export default App
