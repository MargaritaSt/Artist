import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import Artist from './components/Artists';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const {state, setState, data}  = useApplicationData([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Artist state ={state} setState={setState} data={data}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
