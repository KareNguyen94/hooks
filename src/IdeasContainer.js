  
import React from 'react'
import IdeaCard from './IdeaCard'

const IdeaContainer = ({ ideas }) => {
  const Ideas = ideas.map(idea => <IdeaCard idea={idea} />)

  return (
    <section>
      {Ideas}
    </section>
  )
}

export default IdeaContainer