import React from 'react'

const Alerta = ({children}) => {
  return (
    <div>
        <p className='alert alert-danger p-2'>{children}</p>
    </div>
  )
}

export default Alerta