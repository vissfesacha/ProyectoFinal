import React from 'react';

const Zapato =(props)=>{
    return(
        <div className="tc bnegro dib pa2 ma1 grow coso">
            <img alt="zapato" src={props.image}></img>
        <div>
            <p className="tp">{props.name}</p>
            <p className ="tc tp2">${props.price}</p>
        </div>
        </div>
    )
}
export default Zapato