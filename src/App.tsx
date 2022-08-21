import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import dark from './themes/dark';
import light from './themes/light';


const App = () => {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name == 'light' ? dark : light);
  }

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  // Desafio

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <C.Area>
          <Header onChangeTheme={onChangeTheme} />
          <C.Title>Lista de Tarefas</C.Title>
          <AddArea onEnter={handleAddTask} />
          {list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleTaskChange} />
          ))}
        </C.Area>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
