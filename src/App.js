import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { TodoTime } from './TodoTime';
import { TodosCompletedToggle } from './TodosCompletedToggle';
import { TodosCompleted } from './TodosCompleted';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALA', completed: false },
];

function App() {
  return (
    <>
      <TodoTitle />
      <TodoCounter timer={15} total={0} completed={0}/>
      <TodoSearch />
      <TodoTime time={0}/>

      <>
        {defaultTodos.map(todo => (
          <TodoList 
            text={todo.text}  
          />
        ))}
      </>

      <TodosCompletedToggle text={'Mostrar'} icon={'▲▼'}/>
      <TodosCompleted text={'Cortar cebolla'}/>
    </>
  );
}

export default App;