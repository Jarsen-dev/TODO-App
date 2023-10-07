import './TodoTime.css';

function TodoTime({ time }) {
  return (
    <p className='todoTime'>Tareas · <span>{time}</span> min</p>
  );
}

export { TodoTime };