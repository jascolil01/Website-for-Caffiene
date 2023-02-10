import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/CaffieneForm">CaffieneForm</NavLink>
      <NavLink to="/CaffieneType">CaffieneType</NavLink>
      <NavLink to="/Drinks">Drinks</NavLink>
      <NavLink to="/DrinkForm">DrinkForm</NavLink>
    </nav>
      
   
  )
}
