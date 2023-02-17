import React, {useState } from 'react'
import axios from 'axios'

export default function AddDrink() {
  const initialState = {
    name:'',
    description:'',
    image:'',
    typeOfCaffeine:'',
    caffeineLevel:'',
    levelOfEffectiveness:'',
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/drink', formState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="addDrink">
       <label htmlFor='name'>Name of the Drink</label>
      <input type="text" id="name"onChange={handleChange} value={formState.name}/>

      <label htmlFor='description'>Tell us about the drink</label>
      <textarea id="description" cols="30" rows="10"onChange={handleChange} value={formState.description}></textarea>
      
      <div>
      <label htmlFor='image'>Image:</label>
      <input type="text"  placeholder="copy an image url and place it here" id="image"onChange={handleChange} value={formState.image}/>
      </div>
      

      <label htmlFor='typeOfCaffeine'>Name of the Drink</label>
      <select id ="typeOfCaffeine"onChange={handleChange} value={formState.typeOfCaffeine}>
        <option value="Coffee">Coffee</option>
        <option value="Tea">Tea</option>
        <option value="Energy Drink">Energy Drink</option>
        <option value="Espresso">Espresso</option>
        <option value="Soda">Soda</option>
      </select>
     
      <label htmlFor='caffeineLevel'>Amount of caffeine</label>
      <input type="text" id="caffeineLevel"onChange={handleChange} value={formState.caffeineLevel}/>

      <label htmlFor='levelOfEffectiveness'>How would you rate this drink?</label>
      <select id ="levelOfEffectiveness"onChange={handleChange} value={formState.levelOfEffectiveness}>
      <option value="">select</option>
        <option value="☕️">☕️</option>
        <option value="☕️☕️">☕️☕️</option>
        <option value="☕️☕️☕️">☕️☕️☕️</option>
        <option value="☕️☕️☕️☕️">☕️☕️☕️☕️</option>
        <option value="☕️☕️☕️☕️☕️">☕️☕️☕️☕️☕️</option>
      </select>
     
      <button type='submit'> Brew it up!</button>
    </form>
  )
}
