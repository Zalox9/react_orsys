import React from 'react';
import Button from './components/Button/Button' //imp <- raccourcie
import './App.css';

class App extends React.Component {
    // counter = 0;
    constructor(props){
        super(props);
        this.state={counter:0};
    }
    
    render() {
        return (
            <div className="App">
                Valeur du counter : {this.state.counter}
                <hr />
                <Button onClickEvent={() => {
                    this.setState({counter:this.state.counter-1}) //edition etat async
                    // this.state.counter--;
                    console.log(this.state.counter)
                }}
                >soustraction</Button>
                <Button onClickEvent={() => {
                    this.setState({counter:this.state.counter+1})
                    // this.state.counter++;
                    console.log(this.state.counter)
                }}
                    bgColor="red">addition</Button>
            </div>
        );
    }

}

export default App;