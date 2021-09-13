import React from 'react';
import Button from './components/Button/Button' //imp <- raccourcie
import './App.css';

function App() {
  return (
    <div className="App">
      Hello world !
      <hr/>
      <Button text="Ok" bgcolor="skyblue" />
    </div>
  );
}

export default App;
