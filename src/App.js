import React from 'react';
import Provider from './context/Provider';
import CreateSerie from './pages/CreateSerie';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Details from './pages/Details';

function App() {
  return (
  <BrowserRouter>
    <Provider>
      <Switch>
        <Route exact path="/" component={CreateSerie} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Provider>
  </BrowserRouter>

  );
}

export default App;
