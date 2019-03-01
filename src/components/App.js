import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import AddExpensePage from './pages/AddExpensePage';
import Navigation from './navigation/Navigation';
import Home from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add-expense" component={AddExpensePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
