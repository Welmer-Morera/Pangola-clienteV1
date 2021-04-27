import React,{useContext, useState, useEffect} from 'react'
import datosStyles from '../styles/datosStyles.jsx'
import  partidoContext from '../../context/partidos/partidoContext'
import { makeStyles } from '@material-ui/styles'
import  datoContext from '../../context/Datos/datosContext'
import  Error from '../styles/components/error'
const useStyles = makeStyles(datosStyles)
const FormDatos = () => {
    const classes= useStyles()
    const partidosContext = useContext(partidoContext)
    const { partido }= partidosContext 

    const datosContext = useContext(datoContext)
    const {errordato,datoseleccionado, agregarDatos,validarDato, obtenerDatos,actualizarDato,
        limpiarDato}= datosContext
    

   useEffect(() => {
       if(datoseleccionado !== null){
        setDato(datoseleccionado)
       } else{
           setDato({
            equipo1:'',
            equipo2:'',
            pago1:'',
            pago2:'',
           })
       }
   }, [datoseleccionado])
    const [dato, setDato]= useState({

        equipo1:'',
        equipo2:'',
        pago1:'',
        pago2:'',

    })

    const { equipo1,equipo2,pago1,pago2} = dato

    if(!partido)return null

   const [partidoActual]= partido

   
   const  handleChange =e=>{
       setDato({
           ...dato,
           [e.target.name]:e.target.value
       })
   }
   const onSubmit = e =>{
       e.preventDefault()


       if(equipo1.trim()===''||equipo1.trim()===''||pago1===''||pago2===''){
        validarDato()
        return

       } 

       if(datoseleccionado ===null){
            const totalPago = parseInt(pago1) +  parseInt(pago2)
            dato.partido = partidoActual._id
            dato.total = totalPago
            
            agregarDatos(dato)
       }else{
        actualizarDato(dato)
        limpiarDato()
       }
    
       

       obtenerDatos( partidoActual.id)
       
       setDato( {equipo1:'',
       equipo2:'',
       pago1:'',
       pago2:'',})
        
      
   }




    return (
        <div className={classes.contenedor}>
            
        <div className={classes.formulario}>
        <h2 className={classes.h2}>Registro de Datos</h2>
            <form className={classes.form}
            onSubmit={onSubmit}
            
            >
             <div className={classes.div}>
                    <div className={classes.contenedorDivInput}>
                        <input
                            type="text"
                            className={classes.inputText}
                            placeholder="Equipo #1"
                            name="equipo1"
                            value={equipo1}
                            onChange={handleChange}

                        />

                    </div>
                    <div className={classes.contenedorDivInput}>
                        <input
                            type="text"
                            className={classes.inputText}
                            placeholder="Equipo #2"
                            name="equipo2"
                            value={equipo2}
                            onChange={handleChange}
                            
                        />

                    </div>
                  
                  
                  
                </div>
                <div className={classes.div}>
                <div className={classes.contenedorDivInput}>
                        <input
                        
                            type="number"
                            className={classes.inputText}
                            placeholder="pago"
                            name="pago1"
                            value={pago1}
                            onChange={handleChange}
                            
                        />

                    </div>
                    <div className={classes.contenedorDivInput}>
                            <input
                            
                                type="number"
                                className={classes.inputText}
                                placeholder="pago"
                                name="pago2"
                                value={pago2}
                                onChange={handleChange}
                                
                            />

                        </div>
                </div>
                <div className={classes.div}>
                <div className={classes.contenedorDivInputbutton}>
                    <input
                        type="submit"
                        className="btn btn-primario btn btn-submit btn-block"
                      
                        value ={datoseleccionado?'Editar Datos':'Agregar Datos'}
                        
                    />

                </div>
                </div>

            </form>
            {errordato ? <Error />:null}
            
        </div>
        </div> 
     );
}
 
export default FormDatos;