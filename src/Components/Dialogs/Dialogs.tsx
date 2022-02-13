import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.messages}>
            <div className={s.messageItems}>
                <Dialog pathToId={'1'} namePerson={'Miha'}/>
                <Dialog pathToId={'2'} namePerson={'Alinka'}/>
                <Dialog pathToId={'3'} namePerson={'Sasha'}/>
                <Dialog pathToId={'4'} namePerson={'Polina'}/>
                <Dialog pathToId={'5'} namePerson={'Maja'}/>
                <Dialog pathToId={'6'} namePerson={'Ivanich'}/>
            </div>
            <div className={s.dialogs}>
                <Message textMessage={'Hello'}/>
                <Message textMessage={'Good day'}/>
                <Message textMessage={'yoyo'}/>
            </div>
        </div>
    );
}