import React from 'react'
import logo from '../../img/logo1-pe.png'
import CardMedia from '@material-ui/core/CardMedia';
import loginStyles from '../loginStyles'
import { makeStyles } from '@material-ui/core/styles'

const style= makeStyles(loginStyles)



const logoMin = () => {
    const classes=style();

    return ( 
       
           <CardMedia className={classes.logo}>
               <img src={logo} alt="logo"></img>
           </CardMedia>
       
     );
}
 
export default logoMin;