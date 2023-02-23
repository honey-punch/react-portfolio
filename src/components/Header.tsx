import 'css/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <ul className='header__ul'>
                <li className='header__li'>
                    <a href="#">1. Hello</a>
                </li>
                <li className='header__li'>
                    <a href="#">2. Introduce</a>
                </li>
                <li className='header__li'>
                    <a href="#">3. Projects</a>
                </li>
                <li className='header__li'>
                    <a href="#">4. Thank You</a>
                </li>
            </ul>
        </header>
    )
}