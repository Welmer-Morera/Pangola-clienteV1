import React from 'react';
import NuevoPartido from '../partidos/NuevoPatido.jsx'
import ListadoPartidos from '../partidos/listadoPartidos.jsx'
import  LogoMin from '../styles/components/logoMin'
import { makeStyles } from '@material-ui/core/styles'
import SidebarStyle from '../styles/SidebarStyle'
const useStyle= makeStyles(SidebarStyle)
const Sidebar = () => {
    const classes= useStyle();
    return ( 
        
        <aside className={classes.aside}>
            <div className={classes.encabezado}>
            <LogoMin />
            <h1>Partidos <span>Pangola Fut 5</span></h1>
            </div>
            <NuevoPartido />
            <div className={classes.partido}>
                <h2>Tus Partidos</h2>
                <ListadoPartidos />
               

            </div>
        </aside>
     );
}
 
export default Sidebar;
