import React from 'react' ///imr <- raccourcie
import './Button.css'
import PropTypes from 'prop-types'



function Button(props) { //const Button=()=>{}
console.log(props);
    return (
        <button className={props.classColor?'Button '+props.classColor:'Button'} type={props.type}>{props.children}</button>
    );
}

Button.propTypes={
    children:PropTypes.any.isRequired, //info console si aucun element dans children pt->PropTypes
    classColor:PropTypes.string,
}

Button.defaultProps={
    children:"default button value"
}


export default Button;

