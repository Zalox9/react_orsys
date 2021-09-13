import React from 'react';
import Button from './components/Button/Button' //imp <- raccourcie
import './App.css';

class App extends React.Component {
    counter = 0;
    render() {
        return (
            <div className="App">
                Valeur du counter : {this.counter}
                <hr />
                <Button onClickEvent={() => {
                    this.counter--;
                    console.log(this.counter)
                }}
                >soustraction</Button>
                <Button onClickEvent={() => {
                    this.counter++;
                    console.log(this.counter)
                }}
                    bgColor="red">addition</Button>
            </div>
        );
    }

}

export default App;