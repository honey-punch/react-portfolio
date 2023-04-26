import 'css/contents/1.Hello.css';
import { useState, useEffect } from 'react';

export default function Hello() {
    const hello = [`안녕하세요. 장지철입니다.`,
                    `커뮤니케이션 능력을 바탕으로`,
                    `'사용자 친화적인'`,
                    `'쾌적한 UX / UI를 제공하는'`,
                    `프론트엔드 개발자가 되고 싶습니다.`,
                    `감사합니다.`
                    ]
    const [greeting, setGreeting] = useState('');
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [replay, setReplay] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGreeting(greeting + hello[index][count]);
            setCount(count + 1);
        }, 70)

        if (count === hello[index].length) {
            clearInterval(intervalId);
        }

        const timeoutId = setTimeout(() => {
            if (index < hello.length - 1) {
                setIndex(index + 1);
                setGreeting('');
                setCount(0);
            } else {
                clearInterval(intervalId);
                setReplay(true);
            }
        }, 1500);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, [index, count])
    
    const onClick = () => {
        setGreeting('');
        setCount(0);
        setIndex(0);
        setReplay(false);
    }

    return (
        <div className='hello' id='hello'>
            <span>{greeting}</span>
            <button
                className={replay ? 'hello__replay' : 'hello__replay none'}
                onClick={onClick}
            >
                다시 보기
            </button>
        </div>
    )
}