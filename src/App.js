import React from 'react';
import  {BrowserRouter as  Router, Switch, Route } from 'react-router-dom'

import NuevaCuenta  from './components/auth/NuevaCuenta.jsx'
import Partidos from './components/partidos/Partidos.jsx'
import Login from './components/auth/Login.jsx'

import PartidoState from './context/partidos/PartidoState'
import DatosState  from './context/Datos/datosState'
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/token'
import RutaPrivada   from './components/rutas/RutaPrivada'

const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}
function App() {
 
  return (
  
    <PartidoState>
          <DatosState>
            <AlertaState>
              <AuthState>
            <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                  <RutaPrivada exact path="/partidos" component={Partidos} />  
                
                </Switch>
              
            </Router>
            </AuthState>
            </AlertaState>
      </DatosState>
  </PartidoState>
  );
}

export default App;
