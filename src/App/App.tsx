import React from 'react';
import Button from './components/Button/Button' //imp <- raccourcie
import './App.css';

function App() {
  return (
    <div className="App">
      Hello world !
      <hr />
      <Button bgcolor="skyblue">
        <img src="/img/ok.png" alt="btn ok" />
      </Button>
      <Button bgcolor="skyblue">
        <img src="/img/cancel.png" alt="btn cancel" />
        Cancel
      </Button>
      <Button />
    </div>
  );
}

export default App;
