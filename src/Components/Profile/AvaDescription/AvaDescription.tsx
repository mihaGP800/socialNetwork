import React from 'react';
import s from "./AvaDescription.module.css";

export const AvaDescription = () => {
    return (
        <div className={s.avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGXYYPj6QMuE-PsZbHOHOrpIE44qxnaRTpw&usqp=CAU" alt=""/>

            <span>info about me</span>
        </div>
    );
}