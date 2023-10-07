import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { TodoTime } from './TodoTime';
import { TodosCompleted } from './TodosCompleted';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoTitle />
      <TodoCounter timer={0} total={0} completed={0}/>
      <TodoSearch />
      <TodoTime time={0}/>

      <>
        {defaultTodos.map(todo => (
          <TodoList 
            text={todo.text}  
          />
        ))}
      </>

      <TodosCompleted text={'Mostrar'}/>
    </React.Fragment>
  );
}

export default App;