import React, {MouseEvent, useState} from 'react';
import { Button } from './button';
import { FullInput } from './FullInput';
import { Input } from './input';



export const SuperInput =() => {
    let [message, setMessage] = useState([
        {massage: 'message1'},
        {massage: 'message2'},
        {massage: 'message3'},
    ])

    let[title, setTitle] = useState('');

    const addMessage =(title:string) => {
        let newMessage = {massage: title};
        setMessage([newMessage, ...message]);
        
    }
    const onClickButtonHandler =() => {
        addMessage(title);
        setTitle("");
    }

    return (
        <div>
            {/* <FullInput addMessage = {addMessage} /> */}
            <Input title={title} setTitle={setTitle}/>
            <Button name={"+"} callBack={onClickButtonHandler}/>
            <div>
                {message.map( (el, index)=> {
                    return (
                        <div key={index}>{el.massage}</div>
                    )
                })}
            </div>
        </div>
    )
}