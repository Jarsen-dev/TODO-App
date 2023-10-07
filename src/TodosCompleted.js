import './TodosCompleted.css';

function TodosCompleted({ text }) {
  return (
    <div className='todosCompleted'>
      <p>{text} tareas completadas </p>
      <div className='arrow'></div>
    </div>
  );
}

export { TodosCompleted };