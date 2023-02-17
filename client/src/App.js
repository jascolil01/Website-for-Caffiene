import { useEffect,useState } from 'react'
import About from './components/About'
import CaffeineType from './components/CaffieneType'
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
  <div className='app'>
    <header><NavBar/></header>
    <main>
    <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/CaffeineType" element ={<CaffeineType drinks={drinks}/>}/>
        <Route path="/DrinkForm/:id" element ={<DrinkForm drinks={drinks}/>}/>
        <Route path="/EditDrink/:id" element ={<EditDrink />}/>
        <Route path="/Drinks" element ={<Drinks getDrink={getDrink} drinks={drinks}/>}/>
        <Route path="/AddDrink" element ={<AddDrink getDrink={getDrink}/>}/>
      </Routes>
    </main>
  </div>
  )
}

export default App



