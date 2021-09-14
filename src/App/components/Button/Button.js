import React, {useState} from 'react' ///imr <- raccourcie
import './Button.css'
import PropTypes from 'prop-types'



function Button(props) { //const Button=()=>{}
    const [clicked, setclicked] = useState(false) //etat par default
    return (
        <button className={clicked?'Button clicked':'Button'} //ternaire
        type={props.type}
        style={{backgroundColor:props.bgColor,...props.style}}
        onClick={(evt)=>{
            setclicked(true);
            props.onClickEvent("blabla");
            setTimeout(()=>{setclicked(false)}, 300); //necessite callback
        }} //arrow fonction perserve le contexte
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

