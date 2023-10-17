import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoCreate } from './TodoCreate';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { TodoTime } from './TodoTime';
import { TodosCompletedToggle } from './TodosCompletedToggle';
import { TodosCompleted } from './TodosCompleted';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [createValue, setCreateValue] = React.useState('');
  console.log('Los usuarios crean TODOs: ' + createValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const createdTodos = [{ text: createValue, completed: false }];
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoTitle />
      <TodoCounter 
        timer={15} 
        total={totalTodos} 
        completed={completedTodos}
      />
      <TodoCreate 
        createValue={createValue}
        setCreateValue={setCreateValue}
      />
      <TodoTime/>

      <>
        {todos.map(todo => (
          <TodoList 
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}  
          />
        ))}
      </>

      <TodosCompletedToggle text={'Mostrar'} icon={'▲▼'}/>
      <>
        {todos.map(todo => (
          <>
            {todo.completed && <TodosCompleted text={todo.text} />}
          </>
        ))}
      </>
    </>
  );
}

export default App;