import React from 'react'
import useLetras from '../hooks/useLetras'

const Letra = () => {

    const {letra, cargando} = useLetras()

  return (
    <div>
       {cargando ? <p className="fw-bold animate__animated animate__flash">Cargando...</p> :  <p className='letra'>{letra}</p>}
    </div>
  )
}

export default Letra