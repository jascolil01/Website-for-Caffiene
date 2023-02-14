import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function DrinkForm() {
  const [info,setInfo]=useState({})
  let {id}=useParams()

  const getDrinkById = async() =>{
    const res = await axios.get(`http://localhost:3001/api/drink/${id}`)
    setInfo(res.data.drink)
  }

useEffect(()=>{
  getDrinkById()
},[id])
    

  
  return (
    <div>
        <h2>Caffiene Type: {info.typeOfCaffiene}</h2>
        <h2>How good is it? {info.levelOfEffectiveness}/5</h2>
        <h2>Description: {info.description}</h2>
        <h2>How much Caffiene: {info.caffieneLevel}</h2>
     </div>
  )
}
