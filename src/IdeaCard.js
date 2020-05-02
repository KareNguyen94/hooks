import React from 'react'

const IdeaCard = ({ idea }) => {
  
  return (
    <div className='card'>
      <p>Title: {idea.title}</p>
      <p>Description: {idea.description}</p>
      <button>Delete</button>
    </div>
  )
}

export default IdeaCard