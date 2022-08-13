import logo from './logo.svg';
import './App.css';
import Notes from './Components/Notes';
import React from 'react';
import NewNote from './Components/NewNote';

function App() {
  return (
    <React.Fragment>
      <Notes />
      <NewNote />
    </React.Fragment>
    
  );
}

export default App;
