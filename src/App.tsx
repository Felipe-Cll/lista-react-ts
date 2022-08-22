import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { Header } from './components/Header/index';
import GlobalStyles from './styles/global';
import { CustomThemeProvider } from './context';


const App = () => {
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
    
    <CustomThemeProvider>
      <C.Container>
      <GlobalStyles />  
        <C.Area>
          <Header />
          <C.TitleArea>
            <h1>Lista de Tarefas</h1>
          </C.TitleArea>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleTaskChange} />
          ))}

        </C.Area>
      </C.Container>
    </CustomThemeProvider>
  );
}

export default App;
