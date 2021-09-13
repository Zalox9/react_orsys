import React from 'react' ///imr <- raccourcie
import { isPropertyAccessOrQualifiedName } from 'typescript';
import './Button.css'


function Button(props) { //const Button=()=>{}
console.log(props);
    return (
        <button className="Button" type={props.type}>{props.children}</button>
    );
}

export default Button;