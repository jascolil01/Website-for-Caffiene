import { useEffect,useState } from 'react'
import About from './components/About'
import CaffieneForm from './components/CaffieneForm'
import CaffieneType from './components/CaffieneType'
import DrinkForm from './components/DrinkForm'
import Drinks from './components/Drinks'
import NavBar from './components/NavBar'
import Home from './components/Home'
import EditDrink from './components/EditDrink'
import AddDrink from './components/AddDrink'
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'



const App=()=> {
  const [drinks, setDrinks] = useState([])

  const getDrink = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/drink')
      setDrinks(res.data.drinks)
    } catch (err) {
      console.log(err)
    }
  }
 
  useEffect(() => {
    getDrink()
  }, [])
  return (
<div>
    <NavBar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/CaffieneForm" element ={<CaffieneForm drinks={drinks}/>}/>
      <Route path="/CaffieneType" element ={<CaffieneType drinks={drinks}/>}/>
      <Route path="/DrinkForm/:id" element ={<DrinkForm drinks={drinks}/>}/>
      <Route path="/EditDrink/:id" element ={<EditDrink />}/>
      <Route path="/Drinks" element ={<Drinks getDrink={getDrink} drinks={drinks}/>}/>
      <Route path="/AddDrink" element ={<AddDrink getDrink={getDrink}/>}/>
    </Routes>
</div>
  )
}

export default App



