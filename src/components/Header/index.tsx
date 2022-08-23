import { useTheme } from "../../context";
import * as C from './styles';
import tsP from '../../png/tsP.png';
import reactP from '../../png/reactP.png';
import styledP from '../../png/styledP.png';
import draculaP from '../../png/draculaP.png';
import { FiSun } from 'react-icons/fi';

export function Header() {
    const { toggleTheme, theme } = useTheme();

    return (
        <C.Container>
            <C.Nav>
                <C.Logos>
                    <img src={tsP}/>
                    <img src={reactP}/>
                    <img src={styledP}/>
                </C.Logos>
                
                {(theme.title) == 'light' ? (
                    <img src={draculaP} onClick={ toggleTheme } />
                ) : (
                    <FiSun size={30} color="#fff" cursor="pointer" onClick={toggleTheme} />
                )}
            </C.Nav>
        </C.Container>
    )
}