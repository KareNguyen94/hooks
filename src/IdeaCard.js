import React from 'react'

const IdeaCard = ({ idea, deleteIdea }) => {

  const deleteCard = () => {
    deleteIdea(idea.id)
  }
  
  return (
    <div className='card'>
      <p>Title: {idea.title}</p>
      <p>Description: {idea.description}</p>
      <button onClick={deleteCard}>Delete</button>
    </div>
  )
}

export default IdeaCard