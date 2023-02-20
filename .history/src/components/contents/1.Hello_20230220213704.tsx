import 'css/contents/Hello.css';
import { useState, useEffect, ReactElement } from 'react';

export default function Hello() {
    const hello = `안녕하세요. 장지철이라고 합니다.`;
    const array = hello.split('');
    let sum = '';
    let a: HTMLElement= document.querySelector('.hello span')!;

    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            
            a.textContent += array[i];
        }, i * 100);
    }
    
    return (
        <div className='hello'>
            <span>{sum}</span>
        </div>
    )
}