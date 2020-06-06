import React from 'react';

const Zapato =(props)=>{
    return(
        <div className="tc bg-light-green dib br3 pa2 ma1 grow">
            <img alt="zapato" src={"https://robohash.org/test?size=150x150"}></img>
        <div>
            <h2>{props.name}</h2>
            <p>$ {props.price}</p>
        </div>
        </div>
    )
}
export default Zapato