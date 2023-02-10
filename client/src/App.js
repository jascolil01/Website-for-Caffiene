import React from 'react'
import About from './components/About'
import CaffieneForm from './components/CaffieneForm'
import CaffieneType from './components/CaffieneType'
import DrinkForm from './components/DrinkForm'
import Drinks from './components/Drinks'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
<div>
    <NavBar/>
    <Routes>
      <Route path="/" exact component ={Home}/>
      <Route path="/About" component ={About}/>
      <Route path="/CaffieneForm" component ={CaffieneForm}/>
      <Route path="/CaffieneType" component ={CaffieneType}/>
      <Route path="/DrinkForm" component ={DrinkForm}/>
      <Route path="/Drinks" component ={Drinks}/>
    </Routes>
</div>
  )
}
