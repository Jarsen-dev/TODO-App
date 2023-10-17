import React from 'react';
import './TodoCreate.css';

function TodoCreate({
  createValue,
  setCreateValue,
}) {
  return (
    <input 
      className='todoCreate' 
      placeholder="Añadir tarea en 'Tareas', Presione la tecla [Enter] para guardar"
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          setCreateValue(event.target.value);
        }
      }}
    />
  );
}

export { TodoCreate };