import './TodosCompletedToggle.css';

function TodosCompletedToggle({ text, icon }) {
  return (
    <div className='todosCompletedToggle'>
      <p>{text} tareas completadas {icon}</p>
    </div>
  );
}

export { TodosCompletedToggle };