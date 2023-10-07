import './TodoList.css';

function TodoList({ text }) {
  return (
    <div className='todoList'>
      <input type='radio'></input>
      <div className='icon'></div>
      <label>{text}</label>
      <div className='icon2'></div>
    </div>
  );
}

export { TodoList };