import 'Applayout.css';
import Header from 'components/Header';
import Main from "components/Main";
import Footer from "components/Footer";

export default function Applayout() {
    return (
        <div className='app-layout'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}