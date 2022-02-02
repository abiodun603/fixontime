import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Dashboard, Customers} from "../screens/"



function DRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact  component = {Dashboard}/>
                <Route path ="/customers" component = {Customers}/>
            </Switch>
        </Router>
        
    )
}

export default DRoutes
