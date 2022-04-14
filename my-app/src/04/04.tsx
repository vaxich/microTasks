import React, {MouseEvent, useState} from 'react';



export const State =() => {

    //let a = 1;
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        //++a
        setA(++a);
        console.log(a);
        
    }
    const onClickReboot = () => {
        setA(0);
        
        
    }

    return(
        <div>
            <h2>{a}</h2>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickReboot}>обнулить счётчик</button>
        </div>
    )
}