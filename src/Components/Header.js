import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize'
import '../App.css'


const Header = () =>{

    return <Navbar brand='Broadcast' right>
  <NavItem>Sign In</NavItem>
  <NavItem>Sign Up</NavItem>
</Navbar>

}

export default Header
