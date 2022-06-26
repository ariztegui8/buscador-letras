import { useState } from "react"
import useLetras from "../hooks/useLetras"


const Formulario = () => {

  const {setAlerta, busquedaLetra} = useLetras()

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: '',
  })

  const {artista, cancion} = busqueda

  const handleChange = e =>{
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    
    if(Object.values(busqueda).includes('')){
      setAlerta('Coloca nombre de artista y canción')
      return
    }

    busquedaLetra(busqueda)
    
  }

  return (
    <div className="container p-3 container-fondo my-4">
      <form
        onSubmit={handleSubmit}
      >
        <legend className="text-center mb-4 fw-bold">Busca por Artistas y Canciones</legend>

        <div className="grid">
        <div className="d-flex flex-column">
          <label className="mb-1 fw-bold">Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            onChange={handleChange}
            value={artista}
            className="w-75 p-1"
          />
        </div>

        <div className="d-flex flex-column">
          <label className="mb-1 fw-bold">Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre Canción"
            onChange={handleChange}
            value={cancion}
            className="w-75 p-1"
          />
        </div>

        <input
          type="submit"
          value='Buscar'
          className=""
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario