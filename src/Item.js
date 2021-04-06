import React from 'react';
import {useState} from 'react';
import img1 from './img1.jpg'

export default function Item() {
    return (
        <div>
            <h1 style={{color: "crimson", fontSize: "50px"}}>Hello depuis Item</h1>
            <img src={img1} alt=""/>
        </div>
    )
}
