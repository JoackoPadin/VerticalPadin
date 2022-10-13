import React from 'react'
import "./loading.css";

const Loading = () => {
  return (
    <div className='center load'>
      <div className='ring'>
        <span>Cargando...</span>
      </div>
    </div>
  )
}

export default Loading
