import 'css/contents/Hello.css';
import { useState, useEffect } from 'react';

export default function Hello() {
    const hello = '안녕하세요.';
    const array = hello.split('');
    let sum = '';

    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            sum += array[i];
            console.log(sum);
        }, (i + 1) * 1000)
    }
    

    return (
        <div className='hello'>
            <span>{sum}</span>
        </div>
    )
}