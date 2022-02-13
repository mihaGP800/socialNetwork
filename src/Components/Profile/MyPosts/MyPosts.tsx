import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div>
                <div><h3>My posts</h3></div>
                <textarea></textarea>
                <div>
                    <button>add post</button>
                </div>

            </div>
            <Post message={'hi my friend'}/>
            <Post message={'YO'}/>
            <Post message={'bye'}/>

        </div>

    );
}