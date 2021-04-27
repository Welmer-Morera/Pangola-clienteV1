import React,{useState, useContext, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ls from '../styles/ls.jsx'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import {Link} from 'react-router-dom'
import logo from '../img/logo1.png'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AuthContext from '../../context/autenticacion/authContext'
import AlertaContext from '../../context/alertas/alertaContext'
const useStyle = makeStyles(ls)
const Login = (props) => {

    const classes = useStyle()

    const alertaContext = useContext(AlertaContext)
    const {alerta, mostrarAlerta }= alertaContext

    const authContext =useContext(AuthContext)
    const {mensaje, autenticado, iniciarSesion}=authContext


    useEffect(() => {
         if(autenticado){
             props.history.push('/partidos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    const [user, setUser]= useState({
        email:'',
        password:''
    })

    const{email, password}=user
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e=>{
        e.preventDefault();

        // validar campos
        if(email.trim()===''||password.trim()===''){
            mostrarAlerta('campos obligatorios','alerta-error')
        }
        //Accion
        iniciarSesion({email,password})
    }
    return (
       <div className={classes.contenedor}>
           
           <Grid container spacing={1} className={classes.contenedorForm}>
           {alerta ?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}
                <Grid item xs={12}md={6}  className={classes.boxlog} >
                   
                     <div   xs={12}md={6} >
                                <img src={logo} alt="logo"></img>
                                
                    </div >  
                    <div>
                        <h1 className={classes.h1}>Compite, Juega, Disfruta</h1>
                    </div>
                    
                    
                
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Box
                    boxShadow={3}
                    className={classes.boxUser}
                   
                    
                        >
                            
                           <h1> Iniciar  Sesión</h1>  
                          
                        <form
                        onSubmit={onSubmit}
                        
                        >
                           
                            <div className={classes.campoForm}>
                           
                            <FormControl className={classes.textField} variant="outlined">
                                <InputLabel className={classes.text} htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    className={classes.text}
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={onChange}
                                    value={email}
                                    labelWidth={100}/> 
                            </FormControl>
                            </div>
                            <div className={classes.campoForm}>
                            <FormControl className={classes.textField} variant="outlined">
                                <InputLabel className={classes.text} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    className={classes.text}
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    labelWidth={100}/> 
                            </FormControl>

                            </div>
                            <div className={classes.campoForm}>
                            <Button  type="submit" className={classes.btn} variant="contained" value="Iniciar Sesion">
                            Iniciar  Sesión
                            </Button>


                            </div>
                            <Button className={classes.btnU} variant="contained">
            <Link className={classes.textL}  to={'/nueva-cuenta'} >
                Regístrate
            </Link>
            </Button>
                        
                        </form>
                        
                        <div  className={classes.div}>
                        <Divider />
                        </div>
                       
                    </Box>
                </Grid>
            </Grid>

       </div>
    );
}
 
export default Login;