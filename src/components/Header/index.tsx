import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import tsP from '../png/tsP.png';
import reactP from '../png/reactP.png';
import styledP from '../png/styledP.png';

type Props = {
    onChangeTheme: () => void;
}

export const Header = ({ onChangeTheme }: Props) => {
    const { name, colors } = useContext(ThemeContext);

    return (
        <C.Container>
            <C.Icons>
                <img src={tsP}/>
                <img src={reactP}/>
                <img src={styledP}/>
            </C.Icons>
            <Switch 
                onChange={ onChangeTheme }
                checked={ name == "light" }
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secondary}
                onColor={colors.secondary}
            />
        </C.Container>
    );
}