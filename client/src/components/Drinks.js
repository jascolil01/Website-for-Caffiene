import axios from 'axios'
import { NavLink } from 'react-router-dom'


export default function Drinks(props) {
  const handleDelete = async(drinkId) =>{
    await axios.delete(`http://localhost:3001/api/drink/${drinkId}`)
    props.getDrink()
  }

 
  return (
  <div id="drinkList">
    {props.drinks.map((drink)=>(
      <div id="drink" className={drink.typeOfCaffeine} key={drink._id}>
        <img src={drink.image}/>
     <h2>Name: {drink.name}</h2>
     <div id='bottom-text'>

     <NavLink
     className="drink"  to={{
      pathname:`/DrinkForm/${drink._id}`
     }}>View More</NavLink>
      <NavLink 
      className="drink"  to={{
      pathname:`/EditDrink/${drink._id}`
     }}>Edit</NavLink>
     <button onClick={()=> handleDelete(drink._id)}>Delete</button>

     </div>
     
      </div>
    ))}
  </div>
      
  )
}


