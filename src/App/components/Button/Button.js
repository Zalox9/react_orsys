import React from 'react' ///imr <- raccourcie
import './Button.css'
import PropTypes from 'prop-types'



function Button(props) { //const Button=()=>{}
console.log(props);
    return (
        <button className="Button" type={props.type}>{props.children}</button>
    );
}

Button.PropTypes={
    children:PropTypes.any.isRequired //info console si aucun element dans children pt->PropTypes
}

export default Button;

