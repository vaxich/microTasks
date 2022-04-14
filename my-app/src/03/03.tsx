import React, {MouseEvent} from 'react';

type ButtonType = {
    name:string
    callback:()=>void
}

export const Buttons =(props:ButtonType)=> {

       const onClickHandler =(name:string) => {
        props.callback();
    }
    
    return(
        <div>
        
        <button onClick={() =>onClickHandler("Ivan")}>{props.name}</button>
        
        </div>
    )
}