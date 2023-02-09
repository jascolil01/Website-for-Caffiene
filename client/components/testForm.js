import {useState} from 'react'

export default function testForm() {
  const initialState = {
    issueType: '',
    subject: '',
    message: '',
  }
  
  const [formState, setFormState] = useState(initialState)

  return (
    <button type='submit'>Add</button>
  )
}
