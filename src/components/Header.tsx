import 'css/Header.css'
import { Link } from "../modules/react-scroll";

export default function Header() {
    return (
        <header className='header'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <Link className='li__button' to='hello' spy={true} smooth={true}>1. Hello</Link>
                </li>
                <li className='header__li'>
                    <Link className='li__button' to='introduce' spy={true} smooth={true}>2. Introduce</Link>
                </li>
                <li className='header__li'>
                    <Link className='li__button' to='projects' spy={true} smooth={true}>3. Projects</Link>
                </li>
            </ul>
        </header>
    )
}