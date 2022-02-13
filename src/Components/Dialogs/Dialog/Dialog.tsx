import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    pathToId: string
    namePerson: string
}

export const Dialog:React.FC<DialogType> = (props) => {
    return (
        <div className={s.message}>
            <NavLink to={"/Messages/"+ props.pathToId} className={mesClick => mesClick.isActive ? s.active : s.item}>{props.namePerson}</NavLink>
        </div>
    );
}