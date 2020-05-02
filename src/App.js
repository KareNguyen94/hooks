import React, { useState } from 'react';
import Form from './Form'
import IdeasContainer from './IdeasContainer'
import './App.css';

function App() {
  const [ideas, setIdeas] = useState({ideas: []});

  const addIdea = (idea) => {
    setIdeas({ideas: [...ideas.ideas, idea]});
  }

  const deleteIdea = id => {
    setIdeas({ideas: ideas.ideas.filter(idea => idea.id !== id)})
  }

  return (
    <main className="App">
      <h1>Ideabox using React Hooks</h1>
      <Form addIdea={addIdea}/>
      <IdeasContainer ideas={ideas.ideas} deleteIdea={deleteIdea}/>
    </main>
  );
}

export default App;
