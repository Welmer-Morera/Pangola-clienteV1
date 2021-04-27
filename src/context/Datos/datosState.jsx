import React ,{useReducer} from 'react';
import datoContext from './datosContext.jsx'
import  datosReducer from './datosReducer.jsx'
import clienteAxios from '../../config/axios'
import {
    DATOS_PARTIDO,
    AGREGAR_DATOS,
    VALIDAR_DATO, 
    ELIMINAR_DATOS, 
    DATO_ACTUAL,
    ACTUALIZAR_DATO,
    LIMPIAR_DATO} from '../../types'
const DatosState = props => {


    const initialState ={
        datospartido: [],
        errordato:false,
        datoseleccionado: null
    }
    

    const [state, dispatch] = useReducer(datosReducer, initialState)


    const obtenerDatos =  async partido =>{
         try {
            const resultado = await clienteAxios.get('/api/datos',{ params: { partido }})
            console.log(resultado)
            dispatch({
                type:DATOS_PARTIDO,
                payload:resultado.data.datos
            })
         } catch (error) {
             
         }
           
            
            
        
    }

    const agregarDatos = async dato=>{
        
        try {
            const resultado = await clienteAxios.post('/api/datos',dato)
            console.log(resultado)

            dispatch({
                type:AGREGAR_DATOS,
                payload: dato
            })
        } catch (error) {
            console.log(error)
        }
    }

     const validarDato=()=>{
         dispatch({
             type:VALIDAR_DATO,

         })

     }

     const eliminarDato= async (id,partido)=>{
       try {
           await clienteAxios.delete(`/api/datos/${id}`,{params: {partido}})
        dispatch({
            type:ELIMINAR_DATOS,
            payload:id

        })
       } catch (error) {
           
       }

    }

  
    const guardarDatoActual = dato =>{
        dispatch({
            type:DATO_ACTUAL,
            payload:dato
        })
    }

    const actualizarDato = async dato =>{
        
        try {
            const resultado = await clienteAxios.put(`/api/datos/${dato._id}`, dato)
            console.log(resultado)
            dispatch({
                type:ACTUALIZAR_DATO,
                payload:resultado.data.datoActual
            })
        } catch (error) {
            
        }
        

    }

    const limpiarDato=()=>{
        dispatch({
            type:LIMPIAR_DATO
        })
    }


    return(
        <datoContext.Provider
            value={{

                datospartido:state.datospartido,
                errordato:state.errordato,
                datoseleccionado:state.datoseleccionado,

                obtenerDatos,
                agregarDatos,
                validarDato,
                eliminarDato,
                
                guardarDatoActual,
                actualizarDato, 
                limpiarDato
                

            }}
        >
            {props.children}
        </datoContext.Provider>


    )
}

export default DatosState
