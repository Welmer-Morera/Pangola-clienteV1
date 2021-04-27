import { 
    DATOS_PARTIDO, 
    AGREGAR_DATOS,
     VALIDAR_DATO,
     ELIMINAR_DATOS, 
     DATO_ACTUAL,
     ACTUALIZAR_DATO,
     LIMPIAR_DATO} from '../../types'

export default (state, action )=>{

    switch(action.type){
        case DATOS_PARTIDO:
            return{

                ...state,
                datospartido:action.payload
            }
        case AGREGAR_DATOS:
            return{
                ...state,
                 datospartido:[action.payload,...state.datospartido],
                 errordato:false
            }
        
            case VALIDAR_DATO:
                return{
                    ...state,
                    errordato: true
                }

                case ELIMINAR_DATOS:
                    return{
                        ...state,
                        datospartido:state.datospartido.filter(dato=>dato._id!== action.payload)
                    }
            case ACTUALIZAR_DATO:       
                return{
                    ...state,
                    datospartido:state.datospartido.map(dato=>dato._id === action.payload._id?action.payload:dato),
                
                }
            case DATO_ACTUAL:
                return{
                    ...state,
                    datoseleccionado: action.payload
                }
            case LIMPIAR_DATO:
                return{
                    ...state,
                    datoseleccionado:null
               }
           
     
            default:
                return state;
    }
}
