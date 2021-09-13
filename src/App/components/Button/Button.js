import React from 'react' ///imr <- raccourcie
import './Button.css'
import PropTypes from 'prop-types'



function Button(props) { //const Button=()=>{}
console.log(props);
    return (
        <button className="Button "
        type={props.type}
        style={{backgroundColor:props.bgColor,...props.style}}
        onClick={(evt)=>{
            props.onClickEvent("blabla");
        }} //arrow fonction perserve 
        >{props.children}</button>
    );
}

Button.propTypes={ // définit ce qu'est le props
    children:PropTypes.any.isRequired, //info console si aucun element dans children pt->PropTypes
    bgColor:PropTypes.string,
    style:PropTypes.object,
    onClickEvent:PropTypes.func.isRequired,
}

Button.defaultProps={ //valeur par défaut
    children:"default button value", 
    bgColor:"DarkOrange",
    onClickEvent:()=>{} //ne fais rien
}


export default Button;

