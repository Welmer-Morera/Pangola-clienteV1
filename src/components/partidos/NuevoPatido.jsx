import React,{Fragment, useState , useContext} from 'react'
import Button from '@material-ui/core/Button';
import partidoStyles from '../styles/partidoStyles'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import  partidoContext from '../../context/partidos/partidoContext'
import  Error from '../styles/components/error'





const useStyle= makeStyles(partidoStyles)

const NuevoPartido = () => {


    const partidosContext = useContext(partidoContext)
    const { formulario,errorform, mostrarForm, agregarPartido,mostrarError  }= partidosContext



    let f= new Date();
    let date= f.getDate()+'/'+f.getMonth()+'/'+f.getFullYear();

    const [partido, setPartido]= useState({
    fecha:'',
    hora:''
    })
 
    const {fecha,hora}= partido
  
    const onChangePartido = e =>{
        setPartido({
            ...partido, 
            [e.target.name]:e.target.value
        })
    }

    const classes= useStyle();

    const  onSubmitPartido = e =>{
        e.preventDefault();

        if(fecha===''||hora===''){ 
            mostrarError()
            return}

        agregarPartido(partido)
         setPartido({
             fecha:'',
             hora:''
         })








    }

    const onClickForm =()=>{mostrarForm()}
    return (  
        <Fragment>
            <Button  className={classes.btnNew}variant="contained"  onClick={onClickForm}>
        Nuevo Partido
            </Button>

            {
                formulario
                ?
                (
                    <form
                    className={classes.formularioNuevoProyecto}
                    onSubmit={onSubmitPartido}
                    > 
                      
                        <FormControl variant="outlined" className={classes.textFieldDate}>
                            <InputLabel className={classes.text} ></InputLabel>
                            <OutlinedInput 
                                id="fecha"
                                //label="Fecha"
                                type="date"
                                name="fecha"
                                defaultValue={date}
                                value={fecha}
                                onChange={onChangePartido}
                                className={classes.text}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            
                            
                            />
        
                            
                        </FormControl>
        
                                       
                        <FormControl variant="outlined" className={classes.textFieldTime} >
                                <InputLabel className={classes.text} >Hora</InputLabel>
                                    <Select
                                    className={classes.text}
                                    id="hora"
                                    name="hora"
                                    value={hora}
                                    onChange={onChangePartido}
                                    label="Hora"
                                   
                                    >
                                 
                                     <MenuItem className={classes.text}value={'4:00 PM'}>4:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'5:00 PM'}>5:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'6:00 PM'}>6:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'7:00 PM'}>7:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'8:00 PM'}>8:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'9:00 PM'}>9:00 PM</MenuItem>
                                    <MenuItem className={classes.text}value={'10:00 PM'}>10:00 PM</MenuItem>
                                    </Select>
                        </FormControl>    
                               
                      
                       <Button  type="submit" className={classes.btnRegister} variant="contained">
                                Registrar Partido
                         </Button>
                        
        
                    </form>
                )
                :null}

                {errorform ?<div><Error/></div>:null}
            
        </Fragment>
    );
}
 
export default NuevoPartido;