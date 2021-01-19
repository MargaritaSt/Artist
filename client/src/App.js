import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import addId from './helpers/dataID';
import Artist from './pages/Artists';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const {state, setState, radioState, setRadio}  = useApplicationData([]);
// addId(state);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Artist state ={state} setState={setState}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
