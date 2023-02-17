import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <NavLink  id = "navbar"to="/">Home</NavLink>
      <NavLink id = "navbar" to="/About">About</NavLink>
      <NavLink  id = "navbar"to="/CaffeineType">Different Kinds of Caffeine</NavLink>
      <NavLink  id = "navbar"to="/Drinks">Drinks</NavLink>
      <NavLink id = "navbar" to ="/AddDrink">Add a drink here</NavLink>
    </nav>
  )
}
