import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={shopPage} />
    </Switch>
    </div>
  );
}

export default App;
