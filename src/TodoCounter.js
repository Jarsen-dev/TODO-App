import './TodoCounter.css';

function TodoCounter({ timer, total, completed }) {
  return (
    <div className='todoCounter'>
      <div className='todoCounterIntern'>
        <p className='todoCounterInternP'><span>{timer}</span> min</p>
        <p className='todoCounterInternText'>Tiempo transcurrido</p>
      </div>
      <div className='todoCounterIntern'>
        <span>{total}</span>
        <p className='todoCounterInternText'>Tareas a completar</p>
      </div>
      <div className='todoCounterIntern'>
        <span>{completed}</span>
        <p className='todoCounterInternText'>Tareas completadas</p>
      </div>
    </div>
  )
}

export { TodoCounter };