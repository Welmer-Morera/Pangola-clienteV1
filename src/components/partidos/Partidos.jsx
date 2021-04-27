import React,{useContext,useEffect} from 'react'
import Sidebar from '../layout/Sidebar.jsx'
import Appbar from '../layout/Appbar'
import  FormDatos from '../Datos/FormDatos.jsx'
import ListadoDatos from '../Datos/ListadoDatos'
import AuthContext from '../../context/autenticacion/authContext'

 

const Partidos = () => {


    const authContext =useContext(AuthContext)
    const {usuarioAutenticado}=authContext


    useEffect(() => {
      usuarioAutenticado()
      //eslint-disable-next-line
    }, [])
     return ( 

      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
        <Appbar/>
          <main>
          <FormDatos />
            <div className="contenedor-tareas">
                <ListadoDatos />
            </div>
          </main>
        </div>
      </div>

       
      );
 }
  
 export default Partidos;