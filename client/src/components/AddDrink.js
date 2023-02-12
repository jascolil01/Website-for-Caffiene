import React, {useState } from 'react'
import axios from 'axios'

export default function AddDrink(props) {
  const initialState = {
    name:'',
    description:'',
    image:'',
    typeOfCaffiene:'',
    caffieneLevel:'',
    levelOfEffectiveness:'',
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/drink', formState)
    setFormState(initialState)
    props.getDrink()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
       <label htmlFor='name'>Name of the Drink</label>
      <input type="text" id="name"onChange={handleChange} value={formState.name}/>

      <label htmlFor='description'>Tell us about the drink</label>
      <input type="text" id="description"onChange={handleChange} value={formState.description}/>
      <textarea id="description" cols="30" rows="10"></textarea>

      <label htmlFor='image'>Image</label>
      <input type="text" id="image"onChange={handleChange} value={formState.image}/>

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
      <input type="text" id='levelOfEffectiveness'onChange={handleChange} value={formState.levelOfEffectiveness}/>
     
      <button type='submit'> Brew it up!</button>
    </form>
  )
}
