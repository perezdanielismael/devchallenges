import ListaBotones from "./desafios/botones/ListaBotones";
import InicioWindbnb from "./desafios/windbnb/InicioWindbnb.jsx";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './Inicio'
import InicioPronostico from "./desafios/pronostico/InicioPronostico";

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Inicio/>
          </Route>
          <Route path='/windbnb' exact>
            <InicioWindbnb/> 
          </Route>
          <Route path='/styled'>
            <ListaBotones />
          </Route>
          <Route path='/weather'>
            <InicioPronostico />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
