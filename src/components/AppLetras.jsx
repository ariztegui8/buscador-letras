import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Formulario from "./Formulario"
import Letra from "./Letra"


const AppLetras = () => {

  const {alerta, letra, cargando} = useLetras()

  return (
    <>
        <header className="text-center mt-4 mb-5">
          <h1> Búsqueda de Letras de Canciones</h1>
        </header>

        <Formulario />

        <main className="container p-3 container-fondo mt-5">
            {alerta ? <Alerta>{alerta}</Alerta> :
              letra ? <Letra /> :
              cargando ? <p className="fw-bold animate__animated animate__flash animate__infinite">Cargando...</p> :
                <p className="text-center fw-bold">Busca letras de tus artistas favoritos</p>
            }
            
        </main>
    </>
  )
}

export default AppLetras