import React from 'react';
import './App.css';
import Stateless from './components/stateless.component.js';

function App() {
  return (
    <div className="App">
        <Stateless newProp='Property 1'/>
        <hr />
        <Stateless newProp='Property 2'/>

    </div>
  );
}

export default App;
