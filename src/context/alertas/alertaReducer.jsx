
import{MOSTRA_ALERTA,OCULTAR_ALERTA} from '../../types/index'

export default (state, action )=>{
     switch (action.type) {
         case MOSTRA_ALERTA:
             return{
                 alerta:action.payload
             }
         case OCULTAR_ALERTA:
             return{
                 alerta:null
             }
     
         default:
            return state
     }
}