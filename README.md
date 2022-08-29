<h1 align="center">📋 Lista de Tarefas</h1>
<p align="center">
  <img width="500" src="/public/toReadme/Listagif.gif">
</p>

## :books: Informações
Um projeto simples para selecionar tudo o que você precisa e deseja concluir em um dia, o qual a aula foi orientada pelo Bonieky Lacerda. Também há uma função para alteração entre temas "light" ou "<s>dark</s> dracula" inspirado em uma das extensões mais usadas no Visual Studio Code. Neste projeto foi utilizado react com typescript e funcionalidades com styled components.
<ul>
  <li>Para acessar o site: clique em <a href="https://felipe-cll.github.io/lista-react-ts/" target="_blank">To-do</a></li>
</ul>

## :crossed_swords: Desafio
O componente estava modificando apenas o 'State'. O desafio era fazer com que ao clicar no 'checkbox' o valor boolean também seja modificado.

### Solução
Etapa 1:  No arquivo 'App.tsx' tinha que criar uma função que recebesse os itens "id" e "done". Em seguida, a utilização do loop(for...in) para buscar informação dentro da lista(newList) exigindo que, se o "id" for idêntico então receberá "done", após isso a função atualizará a lista.
<br/><br/>

```
const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
```

<br/>Etapa 2: Por fim, na pasta 'ListItem', no arquivo 'index.tsx' deverá remover a importação do "useState", adicionar o "onChange" para receber o "id" e "done" vazio e alterar o que será exportado.

```
type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}
export const ListItem = ({item, onChange}: Props) => {
    return (
        <C.Container done={item.done}>
            <input type="checkbox" checked={item.done} onChange={e => onChange(item.id, e.target.checked)} />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    );
}
```
Para informações mais detalhadas clique em: <a href="https://github.com/LipeCll/lista-react-ts/commit/e5bcc190a5f03b1ccab07560fee62e9d0942421e">Commit solução</a>

## :pushpin: Tecnologias
<ul>
  <li><a href="https://pt-br.reactjs.org/docs/getting-started.html">React</a></li>
  <li><a href="https://www.typescriptlang.org/docs/">Typescript</a></li>
  <li><a href="https://styled-components.com/docs">Styled Components</a></li>
</ul>
