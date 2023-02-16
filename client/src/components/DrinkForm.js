import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function DrinkForm(props) {

  let {id}=useParams()
  
  const initialState = {
    name: '',
    comment: '',
    drinkId:`${id}`
  }
  const [comment,setComment]=useState([])
  const [formState, setFormState] = useState(initialState)

  const [info,setInfo]=useState({})
 

  const getDrinkById = async() =>{
    const res = await axios.get(`http://localhost:3001/api/drink/${id}`)
    setInfo(res.data.drink)
  }
  const getComment = async () => {
    try {
      let res = await axios.get(`http://localhost:3001/api/comment/drink/${id}`,comment)
      setComment(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:3001/api/comment`, formState)
    setFormState(initialState)
    props.getComment()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

console.log(comment)
useEffect(()=>{
  getDrinkById()
  getComment()
},[id])
    

  
  return (
    <div>
        <h2>Caffiene Type: {info.typeOfCaffiene}</h2>
        <h2>How good is it? {info.levelOfEffectiveness}/5</h2>
        <h2>Description: {info.description}</h2>
        <h2>How much Caffiene: {info.caffieneLevel}</h2>

        <form onSubmit={handleSubmit}>
  
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    onChange={handleChange}
    value={formState.name}
  />
  <label htmlFor="comment">Write a comment here!</label>
  <textarea
    id="comment"
    cols="30"
    rows="10"
    onChange={handleChange}
    value={formState.comment}
  ></textarea>
  <button type="submit">Send</button>



{comment.map((x)=>(
  <div className='comment' key={x._id}>
    <h1>Name:{x.name}</h1>
    <h2>Comment:{x.comment}</h2>
  </div>
))}
</form>
     </div>
  )
}
