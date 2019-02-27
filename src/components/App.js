import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import AddPost from './body/AddPost';
import Navigation from './navigation/Navigation';
import Home from './body/Home';
import Post from './body/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add-post" component={AddPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
