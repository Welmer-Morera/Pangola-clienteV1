import React ,{useContext, useEffect} from 'react'
import Partido from './Partido.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import  partidoContext from '../../context/partidos/partidoContext'
import  AlertaContext from '../../context/alertas/alertaContext'
const ListadoPartidos = () => {

    const partidosContext = useContext(partidoContext)
    const { partidos,mensaje,  obtenerPartidos }= partidosContext

    const alertaContext = useContext(AlertaContext)
    const{ alerta,mostrarAlerta } = alertaContext

    useEffect (()=>{
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerPartidos()
     //eslint-disable-next-line
    },[mensaje])
     if (partidos.length ===0) return <p>No hay partidos, comienza  a registrar tus partidos</p>
    
    return ( 
        
        <ul className="listado-proyectos">
            
            <TransitionGroup>
            {partidos.map(partido=>(
                <CSSTransition 
                key={partido._id}
                timeout={200}
                classNames ="proyecto">
                    
                      <Partido 
               
               partido={partido}
               />

                </CSSTransition>
             
           ))}
            </TransitionGroup>
            {alerta?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}

        </ul>
     );
}
 
export default ListadoPartidos;