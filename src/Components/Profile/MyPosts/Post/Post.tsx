import React from 'react';
import s from "./Post.module.css"

type PostType = {
    message:string
}

export const Post:React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="http://sun9-9.userapi.com/c4384/g37962418/a_86cad53d.jpg" alt=""/>
            {props.message}
            <button>+like</button>
        </div>
    );
}