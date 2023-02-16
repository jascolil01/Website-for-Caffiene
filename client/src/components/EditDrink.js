import axios from "axios"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

export default function EditDrink() {
const {id}=useParams()


  const initialState = {
    name:``,
    description:``,
    image:``,
    typeOfCaffiene:``,
    caffieneLevel:``,
    levelOfEffectiveness:``,
  }
  const [formState, setFormState] = useState(initialState)

 const getDrinkById = async()=>{
  const res = await axios.get(`http://localhost:3001/api/drink/${id}`)
  setFormState(res.data.drink)
 }
const handleUpdate=async()=>{
  await axios.put(`http://localhost:3001/api/drink/${id}`, formState)
}
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  useEffect(()=>{
    getDrinkById()||
    handleUpdate()
  },[id])

  return (
    <form id="editDrink" onSubmit={handleUpdate}>
       <label htmlFor='name'>Name of the Drink</label>
      <input type="text" id="name"onChange={handleChange} value={formState.name}/>

      <label htmlFor='description'>Tell us about the drink</label>
      <textarea id="description" cols="30" rows="10"onChange={handleChange} value={formState.description}></textarea>

      <label htmlFor='image'>Image:</label>
      <input type="text" id="image"onChange={handleChange} placeholder="copy an image url and place it here" value={formState.image}/>

      <label htmlFor='typeOfCaffiene'>Name of the Drink</label>
      <select id ="typeOfCaffiene"onChange={handleChange} value={formState.typeOfCaffiene}>
        <option value="Coffee">Coffee</option>
        <option value="Tea">Tea</option>
        <option value="Energy Drink">Energy Drink</option>
        <option value="Espresso">Espresso</option>
        <option value="Soda">Soda</option>
      </select>
     
      <label htmlFor='caffieneLevel'>Amount of caffiene</label>
      <input type="text" id="caffieneLevel"onChange={handleChange} value={formState.caffieneLevel}/>

      <label htmlFor='levelOfEffectiveness'>How well did it work?</label>
      <select id ="levelOfEffectiveness"onChange={handleChange} value={formState.levelOfEffectiveness}>
      <option value="">select</option>
        <option value="1">☕️</option>
        <option value="2">☕️☕️</option>
        <option value="3">☕️☕️☕️</option>
        <option value="4">☕️☕️☕️☕️</option>
        <option value="5">☕️☕️☕️☕️☕️</option>
      </select>
     
      <button type='submit'> Remake it!</button>
    </form>
  )
}
