import React from 'react'
import { Switch, Route} from 'react-router-dom'
import {Dashboard, Blog, Contact, Learn, Subscribe, AddPost, EditLearn, EditPost, AddLearn} from "../screens/"



function DRoutes() {
    return (
      <Switch>
        <Route path="/admin" exact  component = {Dashboard}/>
        <Route path ="/adminblog" component={Blog} >
            
        </Route>
        <Route path ="/admincontact" component = {Contact}/>
        <Route path ="/adminlearn" component = {Learn}/>
        <Route path = "/adminsubscribe" component = {Subscribe} />
        {/* <Route path = "/subscribe" component = {Subscribe} /> */}
        <Route path = "/adminaddPost" component = {AddPost} />
        <Route path = "/admineditPost" component = {EditPost} />

        <Route path = "/adminaddLearn" component = {AddLearn} />
        <Route path = "/admineditLearn" component = {EditLearn} />
      </Switch>        
    )
}

export default DRoutes
