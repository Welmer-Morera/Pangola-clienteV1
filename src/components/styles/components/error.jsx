import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import  partidoStyles from '../partidoStyles'
const style= makeStyles(partidoStyles)




    

const Error = () => {

    const classes=style();
    return ( <div>
                
                <Alert variant="filled" severity="error" className={classes.h3} >
        <h3 className={classes.h3}>Campos vacios</h3>
      </Alert>
               
    </div> );
}
 
export default Error;