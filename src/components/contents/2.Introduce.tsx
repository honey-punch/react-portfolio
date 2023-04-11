import 'css/contents/2.Introduce.css';
import { useEffect, useState, useRef } from 'react';

export default function Introduce() {
    const [animateState, setAnimateState] = useState({
        name: false,
        phone: false,
        email: false,
        address: false,
        education: false,
        career: false,
        skill: false,
    });

    const cardItems = useRef<any>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                if (item.isIntersecting && item.intersectionRatio > 0.9) {
                    setAnimateState((prev) => ({...prev, [item.target.id]: true}))
                } else {
                    setAnimateState((prev) => ({...prev, [item.target.id]: false}))
                }
            })
        })
        cardItems.current.forEach((e: HTMLDivElement) => {observer.observe(e)})
    })
    
    return (
        <div className='introduce' id='introduce'>
            <div className='introduce__card about-me'>
                <div ref={e => cardItems.current[0] = e} id='name' className={animateState.name ? 'card__item animate' : 'card__item'}>
                    <div className='item__me'><img src={'img/me.jpeg'} alt="me" /></div>
                    <div className="item__name-birth">
                        <span className='item__name'>장 지 철</span>
                        <span className='item__birth'>1992 0812</span>
                    </div>
                </div>
                <div ref={e => cardItems.current[1] = e} id='phone' className={animateState.phone ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>PHONE NUMBER</span>
                    <span className='item__value'>010-6765-2325</span>
                </div>
                <div ref={e => cardItems.current[2] = e} id='email' className={animateState.email ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>E-MAIL</span>
                    <span className='item__value'>wkdwlcjf1234@gmail.com</span>
                </div>
                <div ref={e => cardItems.current[3] = e} id='address' className={animateState.address ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>ADDRESS</span>
                    <span className='item__value'>서울특별시 양천구 신정동</span>
                </div>
                <div ref={e => cardItems.current[4] = e} id='education' className={animateState.education ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>EDUCATION</span>
                    <span className='item__value'>가천대학교<br />사회복지학과<br />2011 ~ 2018</span>
                </div>
                
            </div>

            <div className='introduce__card career-skill'>
                <div ref={e => cardItems.current[5] = e} id='career' className={animateState.career ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>CAREER</span>
                    <table className='item__value'>
                        <tbody>
                            <tr>
                                <th className='year'>2020</th>
                                <th className='content'>(주)엠애드커뮤니케이션</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>광고디자인회사</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>디자인팀 / 전략기획팀</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>2020.06 ~ 현재</th>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr>
                                <th className='year'>2018</th>
                                <th className='content'>유니클로</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>의류매장</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>VMD(Visual Merchandiser)</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th className='content'>2018.02 ~ 2019.06</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div ref={e => cardItems.current[6] = e} id='skill' className={animateState.skill ? 'card__item animate' : 'card__item'}>
                    <span className='item__key'>SKILL</span>
                    <div className="item__value">
                        <span className='item__logo-wrap-title'><i className="fa-solid fa-code icon"></i>DEVELOPMENT</span>
                        <ul className='item__logo-wrap'>
                            <li className="item__logo"><img src={'img/html.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/css.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/js.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/ts.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/react.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/tailwind.png'} alt="logo" /></li>
                        </ul>
                        <span className='item__logo-wrap-title'><i className="fa-solid fa-pen-fancy icon"></i>DESIGN</span>
                        <ul className='item__logo-wrap'>
                            <li className="item__logo"><img src={'img/adobe1.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/adobe2.png'} alt="logo" /></li>
                            <li className="item__logo"><img src={'img/adobe3.png'} alt="logo" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

