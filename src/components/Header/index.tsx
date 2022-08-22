import { useTheme } from "../../context";
import * as C from './styles';
import tsP from '../../png/tsP.png';
import reactP from '../../png/reactP.png';
import styledP from '../../png/styledP.png';

export function Header() {
    const{ toggleTheme, theme } = useTheme()

    return (
        <C.Container>
            <C.Nav>
                <C.Logos>
                    <img src={tsP}/>
                    <img src={reactP}/>
                    <img src={styledP}/>
                </C.Logos>
                <button onClick={ toggleTheme }>Tema atual {theme.title}</button>
            </C.Nav>
        </C.Container>
    )

}