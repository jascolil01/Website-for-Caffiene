import { useState } from 'react'
import axios from 'axios'


export default function Form(props) {

  const handleChange =(event)=>{
    setFormState({...formState,[event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/issues', formState)
    setFormState(initialState)
    props.getIssues()
  }

  const initialState = {
    issueType: '',
    subject: '',
    message: '',
  }
  
  
  const [formState, setFormState] = useState(initialState)
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="issueType">Type of Issue:</label>
    <select id="issueType" onChange={handleChange} value={formState.issueType}>
      <option value="outage">Service Outage</option>
      <option value="billing">Billing</option>
      <option value="cancel">Cancel Service</option>
    </select>
    <label htmlFor="subject">Subject:</label>
    <input
      type="text"
      id="subject"
      onChange={handleChange}
      value={formState.subject}
    />
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      cols="30"
      rows="10"
      onChange={handleChange}
      value={formState.message}
    ></textarea>
    <button type="submit">Send</button>
  </form>
  )
}
