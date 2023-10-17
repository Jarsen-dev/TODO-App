import './TodoList.css';

function TodoList(props) {
  return (
    <div className='todoList'>
      <input 
        type='radio' 
        onClick={props.onComplete}
      ></input>
      <div className='icon'></div>
      <label>{props.text}</label>
      <div className='icon2'></div>
    </div>
  );
}

export { TodoList };