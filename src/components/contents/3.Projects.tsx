import 'css/contents/3.Projects.css';
import browserBtn from 'img/browser-btn.png';
import { useState } from "react";
import SofaMusic from './3.projects/1.SofaMusic';
import TodoList from './3.projects/2.TodoList';
import EBook from './3.projects/3.EBook';
import SchoolMusic from './3.projects/4.SchoolMusic';
import Dalock from './3.projects/5.Dalock';

type tabmenu = {
    name: string;
    key: number;
}

export default function Projects() {
    const [currentTab, setCurrentTab] = useState(0);
    const tabmenuArray: Array<tabmenu> = [
        {
            name: 'Sofa Music',
            key: 0,
        },
        {
            name: 'Todo List',
            key: 1,
        },
        {
            name: 'e-Book',
            key: 2,
        },
        {
            name: 'School Music',
            key: 3,
        },
        {
            name: 'Dalock',
            key: 4,
        },
    ]
    const onClick = (index: number) => {
        setCurrentTab(index)
    }

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
                                className = {index === currentTab ? 'tabmenu current' : 'tabmenu'}
                                onClick = {() => {onClick(index)}}
                            >{element.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="box__content">
                    {currentTab == 0 ? (<SofaMusic></SofaMusic>) : null}
                    {currentTab == 1 ? (<TodoList></TodoList>) : null}
                    {currentTab == 2 ? (<EBook></EBook>) : null}
                    {currentTab == 3 ? (<SchoolMusic></SchoolMusic>) : null}
                    {currentTab == 4 ? (<Dalock></Dalock>) : null}
                </div>
            </div>
        </div>
    )
}