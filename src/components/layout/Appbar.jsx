import React,{useContext,useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import appbarStyles from '../styles/appbarStyles.jsx'
import { makeStyles } from '@material-ui/styles'
import AuthContext from '../../context/autenticacion/authContext'
const usStyles= makeStyles(appbarStyles)
const Appbar = () => {

    const authContext =useContext(AuthContext)
    const {usuario, usuarioAutenticado, cerrarSesion}=authContext


    useEffect(() => {
      usuarioAutenticado()
      //eslint-disable-next-line
    }, [])




    const classes= usStyles()
    return ( 
        
        <header className={classes.ap}>
            
                <AppBar className={classes.appheader}  position="static">
                    <Toolbar className={classes.appheader} >
                    {usuario ? <p className={classes.text}> Hola <span className={classes.textSpam}>{usuario.nombre}</span></p>:null}
                       
                        
                    <button className='btn btn-blank cerrar-sesion' onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
                        

                    </Toolbar>


                </AppBar>

        </header>
        


  
    );
}
 
export default Appbar;