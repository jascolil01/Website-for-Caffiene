import React from 'react'

export default function AddDrink() {
  return (
    <form>
      <label htmlFor='typeOfCaffiene'>Name of the Drink</label>
      <select id ="typeOfCaffiene">
        <option value="Coffee">Coffee</option>
        <option value="Tea">Tea</option>
        <option value="Energy Drink">Energy Drink</option>
        <option value="Espresso">Espresso</option>
        <option value="Soda">Soda</option>
      </select>
      <label htmlFor='name'>Name of the Drink</label>
      <input type="text" id="name"/>
      <label htmlFor='description'>Tell us about the drink</label>
      <input type="text" id="description"/>
      <textarea id="description" cols="30" rows="10"></textarea>
      <button type='submit'>Brew it up!</button>
    </form>
  )
}
