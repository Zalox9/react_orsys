import React from 'react' ///imr <- raccourcie
import './Button.css'


function Button(props) { //const Button=()=>{}
console.log(props);
    return (
        <button className="Button">{props.children}</button>
    );
}

export default Button;