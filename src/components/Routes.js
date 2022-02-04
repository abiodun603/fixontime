import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Dashboard, Blog, Contact, Learn, Subscribe, AddPost, EditPost, AddLearn} from "../screens/"



function DRoutes() {
    return (
        // <Router>
            <Switch>
                <Route path="/" exact  component = {Dashboard}/>
                <Route path ="/blog" >
                    <Blog/>
                </Route>
                <Route path ="/contact" component = {Contact}/>
                <Route path ="/learn" component = {Learn}/>
                <Route path = "/subscribe" component = {Subscribe} />
                {/* <Route path = "/subscribe" component = {Subscribe} /> */}
                <Route path = "/addPost" component = {AddPost} />
                <Route path = "/editPost" component = {EditPost} />

                <Route path = "/addLearn" component = {AddLearn} />
                {/* <Route path = "/addPost" component = {AddPost} /> */}


            </Switch>
        // {/* </Router> */}
        
    )
}

export default DRoutes
