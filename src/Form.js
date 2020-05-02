
import React, { useState } from 'react'

const Form = ({ addIdea }) => {
  const [idea, setIdea] = useState({id: Date.now(), title: '', description: ''})

  const handleChange = event => {
    const {name, value} = event.target
    setIdea({...idea, [name]: value})
  }

  const submitIdea = (event) => {
    event.preventDefault();
    addIdea(idea)
    setIdea({id: Date.now(), title: '',description: ''});
  }

  return (
    <form>
      <input name='title' onChange={handleChange} value={idea.title} placeholder='Title..'/>
      <input name='description' onChange={handleChange} value={idea.description} placeholder='Description..'/>
      <button type='submit' onClick={submitIdea}>Submit Idea</button>
    </form>
  )
}

export default Form