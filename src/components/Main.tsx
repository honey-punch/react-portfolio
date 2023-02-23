import 'css/Main.css';
import Hello from 'components/contents/1.Hello';
import Introduce from 'components/contents/2.Introduce';
import Projects from 'components/contents/3.Projects';

export default function Main() {
    return (
        <main className="main">
            <Hello></Hello>
            <Introduce></Introduce>
            <Projects></Projects>
        </main>
    )
}