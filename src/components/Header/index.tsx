import * as C from './styles';
import { useTheme } from "../../context";
import { FiSun } from 'react-icons/fi';
import tsP from '../../png/tsP.png';
import reactP from '../../png/reactP.png';
import styledP from '../../png/styledP.png';
import draculaP from '../../png/draculaP.png';

export function Header() {
    const { toggleTheme, theme } = useTheme();

    return (
        <C.Container>
            <C.Nav>
                <C.Logos>
                    <img src={tsP} alt="tsP"/>
                    <img src={reactP} alt="reactP"/>
                    <img src={styledP} alt="styledP"/>
                </C.Logos>
                {theme.name === 'light' ? (
                    <img src={draculaP} alt="draculaP" onClick={ toggleTheme } />
                ) : (
                    <FiSun size={30} color="#fff" cursor="pointer" onClick={toggleTheme} />
                )}
            </C.Nav>
        </C.Container>
    );
};