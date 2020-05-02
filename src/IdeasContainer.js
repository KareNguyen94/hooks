  
import React from 'react'
import IdeaCard from './IdeaCard'

const IdeaContainer = ({ ideas, deleteIdea }) => {
  const allIdeas = ideas.map(idea => <IdeaCard idea={idea} deleteIdea={deleteIdea}/>)

  return (
    <section>
      {allIdeas}
    </section>
  )
}

export default IdeaContainer