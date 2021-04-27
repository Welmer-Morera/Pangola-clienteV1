import React,{useContext} from 'react'
import Button from '@material-ui/core/Button';
import datosStyles from '../styles/datosStyles.jsx'
import  datoContext from '../../context/Datos/datosContext'
import { makeStyles } from '@material-ui/styles'
import  partidoContext from '../../context/partidos/partidoContext'
const useStyles = makeStyles(datosStyles)
const Datos = ({dato}) => {
    const classes= useStyles()


    const partidosContext = useContext(partidoContext)
    const { partido }= partidosContext 
    const datosContext = useContext(datoContext)
    const {eliminarDato, obtenerDatos,actualizarDato,guardarDatoActual }= datosContext

    const [partidoActual]= partido

    const datoElimnidado =id =>{
        eliminarDato(id ,partidoActual._id)
        obtenerDatos(partidoActual.id)

    }

    const cambiarEstado = dato =>{
         if(dato.estado){
            dato.estado=false
         }else{
            dato.estado=true
         }
         actualizarDato(dato)

    }

    const seleccionarDato=dato=>{
        guardarDatoActual(dato)
    }
   
    return ( 
        <li className="tarea sombra">

           
           <div className={classes.form}>
           <p  >
                <h1>Equipos</h1>
                    <h3 >{dato.equipo1}</h3>
                    <h3 >{dato.equipo2}</h3>
                   
                   
                    
                    
                
            </p>
            <p >
                <h1>Pago</h1>
                    <h3>₡ {dato.pago1}</h3> 
                    <h3>₡ {dato.pago2}</h3> 
                  

            </p>
            
           </div>
           <p >
                <h1>Total</h1>
                    <h2>₡ {dato.total}</h2> 
                    
                  

            </p>
           

            
            <div className="estado">
                {
                    dato.estado
                ?
                    (
                        <Button  className={classes.btnCompleto}
                        onClick={()=>cambiarEstado(dato)}
                        > Finalizado</Button>
                    
                    )
                :
                    (
                        <Button  className={classes.btnIncompleto}
                        onClick={()=>cambiarEstado(dato)}
                         > En curso</Button>
                    
                    )  

                }
            </div>
            <div className="acciones">
                <Button className={classes.btnAccionesEditar}   variant="contained"  onClick={()=>seleccionarDato(dato)}>Editar</Button>
                <Button className={classes.btnAccionesEliminar}  onClick={()=>datoElimnidado(dato._id)} variant="contained" >Eliminar</Button>
            </div>
           
        </li> 
        );
}
 
export default Datos;