import React, { useState } from 'react';
import Form from './Form'
import IdeasContainer from './IdeasContainer'
import './App.css';

function App() {
  const [ideas, setIdeas] = useState({ideas: []});

  return (
    <main className="App">
      <h1>Ideabox using React Hooks</h1>
      <Form />
    </main>
  );
}

export default App;
