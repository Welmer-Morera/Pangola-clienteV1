import React,{useReducer} from 'react'
import partidoReducer from './partidoReducer'
import partidoContext from './partidoContext'
import { FORMULARIO_PARTIDO,PARTIDO_ERROR, OBTENER_PARTIDO,AGREGAR_PROYECTO,VALIDAR_FORMULARIO, PARTIDO_ACTUAL, ELIMINAR_PARTIDO} from '../../types'
import clienteAxios from '../../config/axios'

const PartidoState = props =>{
    

     
    const initialState ={
         partidos : [],
        formulario:false,
        errorform:false,
        partido:null,
        mensaje: null
    }

     const [state, dispatch] = useReducer(partidoReducer, initialState)

     const mostrarForm =()=>{
         dispatch({
             type:FORMULARIO_PARTIDO
         })
     }

     const  obtenerPartidos  =  async()=>{
       try {
           const resultado = await clienteAxios.get('/api/partidos')
        dispatch({
            type:OBTENER_PARTIDO,
            payload: resultado.data.partidos
        })
           
       } catch (error) {
        const  alerta ={
            msg:'hubo un error',
            categoria:'alerta-error'
        }
        dispatch({
            type:PARTIDO_ERROR,
            payload:alerta
        })
    }
     }

    
     const agregarPartido =  async partido =>{

      
        try {
            const resultado = await clienteAxios.post('/api/partidos',partido)
            console.log(resultado)

            dispatch({
                type:AGREGAR_PROYECTO,
                 payload: resultado.data
    
            })
        } catch (error) {
            const  alerta ={
                msg:'hubo un error',
                categoria:'alerta-error'
            }
            dispatch({
                type:PARTIDO_ERROR,
                payload:alerta
            })
        }
     }

     const mostrarError=()=>{
         dispatch({
             type:VALIDAR_FORMULARIO,

         })
     }

     const partidoActual = partidoId =>{
         dispatch({
             type:PARTIDO_ACTUAL,
             payload:partidoId
         })
     }

     const eliminarPartido = async partidoId =>{
       try {
           await clienteAxios.delete(`/api/partidos/${partidoId}`)
           dispatch({
            type:ELIMINAR_PARTIDO,
            payload:partidoId
        })
           
       } catch (error) {
           const  alerta ={
               msg:'hubo un error',
               categoria:'alerta-error'
           }
           dispatch({
               type:PARTIDO_ERROR,
               payload:alerta
           })
       }
    }

     return (
         <partidoContext.Provider
            value={{
                partidos:state.partidos,
                formulario: state.formulario,
                errorform:state.errorform,
                partido:state.partido,
                mensaje:state.mensaje,
                mostrarForm,
                obtenerPartidos,
                agregarPartido,
                mostrarError ,
                partidoActual,
                eliminarPartido
            }}
         >
             {props.children}
         </partidoContext.Provider>
     )
}

export default PartidoState;