import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

const Com1 = () => <h1>Com1</h1>
const Com2 = () => <h1>Com2</h1>

const MenuLink = ({to,label}) =>{
  return(
    <Route
      path={to}
      children={({match})=>{
        console.log(match)
        return(
          <div>
            {match?'>':""}
            <Link to={to} >{label}</Link>
          </div>
        )
      }}
    />
  )
}

export default class Page5 extends Component {
  render() {
    return (
      <div>
        <h1>Page5</h1>
        <Router>
          <MenuLink to='/page5/com1' label="com1" />|
          <MenuLink to='/page5/com2' label="com2" />
          <Switch>
            <Route path="/page5/com1" component={Com1}/>
            <Route path="/page5/com2" component={Com2}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
