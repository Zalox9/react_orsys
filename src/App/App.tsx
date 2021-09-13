import React from 'react';
import Button from './components/Button/Button' //imp <- raccourcie
import './App.css';

function App() {
  return (
    <div className="App">
      Hello world !
      <hr />
      <Button bgColor="green"
      onClickEvent={(arg) =>{
        console.trace(arg);
      }}>
        <img src="/img/ok.png" alt="btn ok" />
      </Button>
      <Button bgColor="tomato" style={{textDecoration:'underline', backgroundColor:'red'}}
      onClickEvent={(arg) =>{
        console.error("il y'a une erreur ", arg)
      }}>
        <img src="/img/cancel.png" alt="btn cancel" />
        Cancel
      </Button>
      <Button />
    </div>
  );
}

export default App;
