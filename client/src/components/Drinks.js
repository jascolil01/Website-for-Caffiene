import axios from 'axios'
import { NavLink } from 'react-router-dom'


export default function Drinks(props) {
  const handleDelete = async(drinkId) =>{
    await axios.delete(`http://localhost:3001/api/drink/${drinkId}`)
    props.getDrink()
  }
  return (
    <div>
    <h1>Drink list:</h1>
    {props.drinks.map((drink, index)=>(
      <div key={drink._id}>
     <h2>Name: {drink.name}</h2>
     <NavLink  to="/DrinkForm">View More</NavLink>
     <button onClick={()=> handleDelete(drink._id)}>Delete</button>
      </div>
    ))}
   
    </div>
      
  )
}


