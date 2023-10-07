import './TodoCounter.css';

function TodoCounter({ timer, total, completed }) {
  return (
    <div className='todoCounter'>
      <div className='todoCounterIntern'>
        <span>{timer} min</span>
        <p>Tiempo transcurrido</p>
      </div>
      <div className='todoCounterIntern'>
        <span>{total}</span>
        <p>Tareas a completar</p>
      </div>
      <div className='todoCounterIntern'>
        <span>{completed}</span>
        <p>Tareas completadas</p>
      </div>
    </div>
  )
}

export { TodoCounter };