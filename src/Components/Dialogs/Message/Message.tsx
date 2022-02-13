import React from 'react';
import s from "./Message.module.css";

type MessageType = {
    textMessage:string
}

export const Message:React.FC<MessageType> = (props) => {
    return (
        <div className={s.dialog}>{props.textMessage}</div>
    );
}