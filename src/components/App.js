import React from 'react';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path ="/home"><Home/></Route>
        <Route ptah exact="/"><Home/></Route>
      </Switch>
    </Router>
  );
};

export default App;