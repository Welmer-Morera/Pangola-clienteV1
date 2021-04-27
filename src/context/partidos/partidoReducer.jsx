
import { FORMULARIO_PARTIDO,PARTIDO_ERROR, OBTENER_PARTIDO,AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PARTIDO_ACTUAL, ELIMINAR_PARTIDO } from '../../types'
export default (state, action )=>{
    switch(action.type){
        case FORMULARIO_PARTIDO:
            return{
                ...state, 
                formulario:true
            }
        case OBTENER_PARTIDO:
            console.log(action.payload)
            return{
                ...state, 
                partidos:action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                partidos:[...state.partidos,action.payload],
                formulario: false,
                errorform: false
            }
        case VALIDAR_FORMULARIO :
            return{
                ...state,
                errorform:true

            }
         case PARTIDO_ACTUAL:
             return{
                 ...state,
                 partido:state.partidos.filter(partido =>partido._id ===action.payload)
             }
        case ELIMINAR_PARTIDO:
            return{
                ...state,
                partidos:state.partidos.filter(partido =>partido._id !==action.payload),
                partido:null
            }
        case PARTIDO_ERROR:
            return{
                ...state,
                mensaje:action.payload
            }   

        default:
            return state;
    }
}