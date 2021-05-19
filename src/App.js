import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter as Router,NavLink,HashRouter,BrowserRouter, Switch} from "react-router-dom";
import Home from './screens/home';
import Results from './screens/results';
import Picker from './screens/picker';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/picker" component={Picker} />
      </Switch>
    </Router>
  );
}

export default App;
