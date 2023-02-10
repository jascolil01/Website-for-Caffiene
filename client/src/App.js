
import About from './components/About'
import CaffieneForm from './components/CaffieneForm'
import CaffieneType from './components/CaffieneType'
import DrinkForm from './components/DrinkForm'
import Drinks from './components/Drinks'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AddDrink from './components/AddDrink'
import { Routes,Route } from 'react-router-dom'

const App=()=> {
  return (
<div>
    <NavBar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/CaffieneType/CaffieneForm" element ={<CaffieneForm/>}/>
      <Route path="/CaffieneType" element ={<CaffieneType/>}/>
      <Route path="/Drinks/DrinkForm" element ={<DrinkForm/>}/>
      <Route path="/Drinks" element ={<Drinks/>}/>
      <Route path="/AddDrink" element ={<AddDrink/>}/>
    </Routes>
</div>
  )
}

export default App
