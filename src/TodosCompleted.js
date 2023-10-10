import './TodoList.css';

function TodosCompleted({ text }) {
  return (
    <div className='todoList'>
      <input type='radio' checked></input>
      <div className='icon todoList-icon--completed'></div>
      <label className='todoList-label--completed'>{text}</label>
    </div>
  );
}

export { TodosCompleted };