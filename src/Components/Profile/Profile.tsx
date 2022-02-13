import React from 'react';
import s from './Profile.module.css'
import {FrontImg} from "./FrontImg/FrontImg";
import {AvaDescription} from "./AvaDescription/AvaDescription";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <FrontImg/>
            <AvaDescription/>
            <MyPosts/>

        </div>
    );
}