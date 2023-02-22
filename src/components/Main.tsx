import 'css/Main.css';
import Hello from 'components/contents/1.Hello';
import Introduce from 'components/contents/2.Introduce';

export default function Main() {
    return (
        <main className="main">
            <Hello></Hello>
            <Introduce></Introduce>
        </main>
    )
}