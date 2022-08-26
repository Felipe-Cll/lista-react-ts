import * as C from './styles';
import { useState, KeyboardEvent } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

type Props = {
    onEnter: (taskName: string) => void
};

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image'><IoMdAddCircle fontSize={26} /></div>
            <input 
                type="text" 
                placeholder='Adicione uma tarefa' 
                value={inputText} 
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
};