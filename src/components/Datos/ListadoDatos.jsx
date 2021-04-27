import React, {Fragment, useContext} from 'react'
import  Datos from './Datos.jsx'
import datosStyles from '../styles/datosStyles.jsx'
import Button from '@material-ui/core/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import  partidoContext from '../../context/partidos/partidoContext'
import { makeStyles } from '@material-ui/styles'
import  datoContext from '../../context/Datos/datosContext'

const useStyles = makeStyles(datosStyles)
const ListasDatos = () => {
    const classes= useStyles()
    const partidosContext = useContext(partidoContext)
    const { partido, eliminarPartido }= partidosContext 


    const datosContext = useContext(datoContext)
    const {  datospartido }= datosContext

    if(!partido)return<h2>Selecciona un partido</h2>

   const [partidoActual]= partido
    
        

       const onClickElinimarPartido = ()=>{
        eliminarPartido(partidoActual._id)
       }
        
    return ( 
        <Fragment>
            <h2 className={classes.h2}>Datos del Partido</h2>
            <h2 className={classes.h2}>Fecha: {partidoActual.fecha+' | hora: '+partidoActual.hora}</h2>
            <ul className="listado-tareas">
           
                {datospartido.length === 0
                    ?(<li className="tarea"><p>No hay datos registrados </p> </li>)
                    :<TransitionGroup>
                      {  datospartido.map(dato=>(
                       <CSSTransition
                       key={dato.id}
                       timeout={600}
                       className="tarea"
                       >
                            <Datos 
                            dato={dato}
                        />
                       </CSSTransition>
                        

                    ))}
                    </TransitionGroup>
                }
                
            </ul>
            <Button className={classes.btnAccionesEliminar} variant="contained" onClick={onClickElinimarPartido} >Eliminar Partido</Button>
        </Fragment>

     );
     
}

export default ListasDatos;