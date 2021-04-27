import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import logo from '../img/logo1-pe.png'
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles'
import loginStyles from '../styles/loginStyles.jsx'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContenxt from  '../../context/autenticacion/authContext'

const useStyle = makeStyles(loginStyles)


const NuevaCuenta = (props) => {

    const alertaContext=  useContext(AlertaContext)
    const{ alerta, mostrarAlerta }= alertaContext


    const authContext = useContext(AuthContenxt)
    const {mensaje, autenticado ,registrarUsuario } = authContext


     

    const classes = useStyle()

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
        nombre:'',
        email:'',
        password:'',
        repassword:''
    })

    const{nombre,email, password,repassword}=user
    const onChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e=>{
        e.preventDefault();

        if(nombre.trim()===''||
           email.trim()===''||
           password.trim()===''||
           repassword.trim()==='') {
            mostrarAlerta('Todos los campos son obligatorios ','alerta-error')
            return
        }


         if(password.length<6){
            mostrarAlerta(' la contaseña debe ser minimo de  6 caracteres ','alerta-error')
            return
         }

         if(password!==repassword){
            mostrarAlerta('las contraseñas no coinciden ','alerta-error')
         } 

         registrarUsuario({
            nombre, 
            email, 
            password
        })
    }

    return ( 

        <div className={classes.formUsuario}>
            {alerta ?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}
        <div className={classes.contenedorFormRegister}>

       <Card  className={classes.logo}>
           <CardMedia>
               <img src={logo} alt="logo"></img>
           </CardMedia>
       </Card>
                <h1> Nueva Cuenta</h1>
            <form
             onSubmit={onSubmit}
            
            >
                 <div className={classes.campoFormRegister}>
                 <FormControl className={classes.textField} variant="outlined">
                    <InputLabel className={classes.text} htmlFor="outlined-adornment-email">Nombre</InputLabel>
                    <OutlinedInput
                        className={classes.text}
                        id="nombre"
                        type="text"
                        name="nombre"
                        onChange={onChange}
                        value={nombre}
                        labelWidth={100}/> 
                </FormControl>
                </div>
                 <div className={classes.campoFormRegister}>
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
                <div className={classes.campoFormRegister}>
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
                <div className={classes.campoFormRegister}>
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel className={classes.text} htmlFor="outlined-adornment-password">Confirmar Password</InputLabel>
                    <OutlinedInput
                        className={classes.text}
                        id="repassword"
                        type="password"
                        name="repassword"
                        value={repassword}
                        onChange={onChange}
                        labelWidth={100}/> 
                </FormControl>

                </div>
                <div className={classes.campoFormRegister}>
                <Button  type="submit" className={classes.btnRegister} variant="contained" value="Iniciar Sesion">
               Registrar
                </Button>


                </div>
               
            </form>
           
            <Link to={'/'} className="enlace-cuenta">
               <h2> volver a Iniciar Sesión</h2>
           </Link>
            </div>

        </div>
    );
}
 
export default NuevaCuenta;