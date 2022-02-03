import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Dashboard, Blog, Contact, Learn, Subscribe} from "../screens/"



function DRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact  component = {Dashboard}/>
                <Route path ="/blog" component = {Blog}/>
                <Route path ="/contact" component = {Contact}/>
                <Route path ="/learn" component = {Learn}/>
                <Route path = "/subscriber" component = {Subscribe} />
            </Switch>
        </Router>
        
    )
}

export default DRoutes
