import React,{useContext}from 'react'
import  partidoContext from '../../context/partidos/partidoContext'
import  datoContext from '../../context/Datos/datosContext'
 
const Partido = ({partido}) => {

    const partidosContext = useContext(partidoContext)
    const { partidoActual }= partidosContext 

    const datosContext = useContext(datoContext)
    const { obtenerDatos}= datosContext

    const  selecccionarPartido = id =>{

        partidoActual(id)
        obtenerDatos(id)
    }
    return (  
        <li>
            <button
            type="button"
            className="btn btn-blank"
             onClick={()=>selecccionarPartido(partido._id)}
            >
                {partido.fecha+' '+partido.hora}
            </button>
        </li>
    );
}
 
export default Partido;