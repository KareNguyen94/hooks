
import React, { useState } from 'react'

const Form = ({ addIdea }) => {
  const [input, setInput] = useState({id: Date.now(), title: '', description: ''})

  const handleChange = event => {
    const {name, value} = event.target
    setInput({...input, [name]: value})
  }

  const submitIdea = (event) => {
    event.preventDefault();
    addIdea(input)
    setInput({id: Date.now(), title: '',description: ''});
  }

  return (
    <form>
      <input name='title' onChange={handleChange} value={input.title} placeholder='Title..'/>
      <input name='description' onChange={handleChange} value={input.description} placeholder='Description..'/>
      <button type='submit' onClick={submitIdea}>Submit Idea</button>
    </form>
  )
}

export default Form