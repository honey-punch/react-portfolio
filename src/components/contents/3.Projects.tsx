import 'css/contents/3.Projects.css';
import browserBtn from 'img/browser-btn.png';
import { useEffect, useState } from "react";

type tabmenu = {
    name: string;
    key: string;
    desc: string;
    skill: string;
}
type Detail = {
    [key: string] : boolean;
    sofaMusic: false,
    todoList: false,
    eBook: false,
    schoolMusic: false,
    dalock: false
}

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(0);
    const tabmenuArray: Array<tabmenu> = [
        {
            name: 'Sofa Music',
            key: 'sofaMusic',
            desc: 'React를 이용해 만든 가상의 음악 엔터테인먼트 웹페이지',
            skill: 'React, Ts, Css',
        },
        {
            name: 'Todo List',
            key: 'todoList',
            desc: '',
            skill: 'React, Ts, Css',
        },
        {
            name: 'e-Book',
            key: 'eBook',
            desc: '',
            skill: 'React, Ts, Css',
        },
        {
            name: 'School Music',
            key: 'schoolMusic',
            desc: '',
            skill: 'React, Ts, Css',
        },
        {
            name: 'Dalock',
            key: 'dalock',
            desc: '',
            skill: 'React, Ts, Css',
        },
    ]
    const onClickTabmenu = (index: number) => {
        setCurrentTab(index);
    }

    const [currentDetail, setCurrentDetail] = useState<Detail>({
        sofaMusic: false,
        todoList: false,
        eBook: false,
        schoolMusic: false,
        dalock: false
    });
    const onClickDetail = (key: string) => {
        setCurrentDetail((prev) => ({...prev, [key]: !prev[key]}))
    }

    const [upDownState, setUpDownState] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setUpDownState((prev) => (!prev));
        }, 300)

        return () => {
            clearInterval(intervalId);
        }
    })

    return (
        <div className="projects">
            <div className="projects__box">
                <div className="box__bar">
                    <div className="bar__btns">
                        <img src={browserBtn} alt="btns" />
                    </div>
                    <ul className='bar__tabmenu-list'>
                        {tabmenuArray.map((element, index) => (
                            <li key={element.key}
                                className={index === currentTab ? 'tabmenu current' : 'tabmenu'}
                                onClick = {() => {onClickTabmenu(index)}}
                            >{element.name}</li>
                        ))}
                    </ul>
                </div>
                {tabmenuArray.map((element, index) => (
                    <div key={element.key}
                        className={index === currentTab ? 'box__content active' : 'box__content'}>
                        <div className='content__img'>
                            <img src="#" alt="gif" />
                        </div>
                        <div className={currentDetail[element.key] ? 'content__detail active' : 'content__detail'}>
                            <div className="detail__name">{element.name}</div>
                            <div className="detail__desc">{element.desc}</div>
                            <div className="detail__skill">{element.skill}</div>
                        </div>
                        <button className={upDownState ? 'content__detail-btn up-down': 'content__detail-btn'}
                                onClick={() => {onClickDetail(element.key)}}
                                >
                                <i className="fa-solid fa-angles-up"></i>상세 설명
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}