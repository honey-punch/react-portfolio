import 'css/contents/Hello.css';
import { useState, useEffect } from 'react';

export default function Hello() {
    const hello = '안녕하세요.';
    const array = hello.split('');
    let sum = '';

    let a: HTMLSpanElement = document.querySelector('.hello span');
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            sum += array[i];
            a.textContent = sum
        }, i * 500);
    }
    
    return (
        <div className='hello'>
            <span></span>
        </div>
    )
}