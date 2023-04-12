import 'css/contents/3.Projects.css';
import { useState } from "react";

type tabmenu = {
    name: string;
    key: string;
    desc: string;
    skill: string;
    imgUrl: string;
    github: string;
    url: string;
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
            skill: 'React / TS / CSS',
            imgUrl: '/img/sofa-music.jpg',
            github : 'https://github.com/honey-punch/react-sofa-music',
            url: 'https://honey-punch.github.io/react-sofa-music/'
        },
        {
            name: 'Todo List',
            key: 'todoList',
            desc: 'React를 이용한 간단한 todo list',
            skill: 'React / TS / CSS',
            imgUrl: '/img/todo-list.jpg',
            github : 'https://github.com/honey-punch/react-todolist',
            url: 'https://honey-punch.github.io/react-todolist/'
        },
        {
            name: 'e-Book',
            key: 'eBook',
            desc: 'eBook 가상 웹사이트',
            skill: 'HTML / Tailwind / JS',
            imgUrl: '/img/e-book.jpg',
            github : 'https://github.com/honey-punch/ebook',
            url: 'https://honey-punch.github.io/ebook/'
        },
        {
            name: 'School Music',
            key: 'schoolMusic',
            desc: "악기 판매사이트 '스쿨뮤직'의 리뉴얼 프로젝트",
            skill: 'HTML / CSS / JS',
            imgUrl: '/img/school-music.jpg',
            github : 'https://github.com/honey-punch/schoolmusic',
            url: 'https://honey-punch.github.io/schoolmusic/'
        },
        {
            name: 'Dalock',
            key: 'dalock',
            desc: "셀프 짐보관 '미니창고 다락'의 리뉴얼 프로젝트",
            skill: 'HTML / CSS / JS',
            imgUrl: '/img/dalock.jpg',
            github : 'https://github.com/honey-punch/dalock',
            url: 'https://honey-punch.github.io/dalock/'
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

    const [linkState, setLinkState] = useState(false);

    return (
        <div className="projects" id='projects'>
            <div className="projects__box">
                <div className="box__bar">
                    <div className="bar__btns">
                        <img src={'img/browser-btn.png'} alt="btns" />
                    </div>
                    <ul className='bar__tabmenu-list'>
                        {tabmenuArray.map((element, index) => (
                            <li
                                key={element.key}
                                className={index === currentTab ? 'tabmenu current' : 'tabmenu'}
                                onClick = {() => {onClickTabmenu(index)}}
                            >{element.name}</li>
                        ))}
                    </ul>
                </div>
                {tabmenuArray.map((element, index) => (
                <div
                    key={element.key}
                    className={index === currentTab ? 'box__content active' : 'box__content'}
                    onMouseEnter={() => {setLinkState(true)}}
                    onMouseLeave={() => {setLinkState(false)}}
                >
                    <div className='content__img'>
                        <img className={linkState ? 'blur' : ''} src={process.env.PUBLIC_URL + element.imgUrl}></img>
                        <span className={linkState ? 'content__link active' : 'content__link'} onClick={() => {window.open(element.url)}}>
                        사이트 보러가기
                        </span>
                    </div>

                    <div className={currentDetail[element.key] ? 'content__detail active' : 'content__detail'}>
                        <div className="detail__name detail">{element.name}</div>
                        <div className="detail__desc detail">{element.desc}</div>
                        <div className="detail__skill detail">{element.skill}</div>
                        <button className="detail__github detail" onClick={() => {window.open(element.github)}}>코드 보러가기</button>
                    </div>
                    <button
                        className='content__detail-btn'
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